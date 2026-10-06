import {test} from 'node:test';import assert from 'node:assert/strict';import {retainedReleaseIds,prepareRelease,pruneReleaseOutput,rollbackRelease,activateStoredRelease,readManifests} from './prepare-retained-release.mjs';
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
test('rollback refuses wrong entry or missing dependency before switching the active entry',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'release-fixture-')),source=path.join(root,'input'),out=path.join(root,'release-fixture','output');
 fs.mkdirSync(path.join(source,'assets'),{recursive:true});fs.writeFileSync(path.join(source,'index.html'),'A');fs.writeFileSync(path.join(source,'assets','a.js'),'a');
 const a=prepareRelease(source,out,'A');fs.writeFileSync(path.join(out,'index.html'),'B');fs.writeFileSync(path.join(source,'index.html'),'wrong');
 assert.throws(()=>rollbackRelease(source,out,a),/entry version mismatch/);assert.equal(fs.readFileSync(path.join(out,'index.html'),'utf8'),'B');
 fs.writeFileSync(path.join(source,'index.html'),'A');fs.unlinkSync(path.join(out,'assets','a.js'));assert.throws(()=>rollbackRelease(source,out,a),/closure missing/);assert.equal(fs.readFileSync(path.join(out,'index.html'),'utf8'),'B');
});
test('dependency collision and withdrawn content leave the active entry intact',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'release-fixture-')),source=path.join(root,'input'),out=path.join(root,'release-fixture','output');
 fs.mkdirSync(path.join(source,'assets'),{recursive:true});fs.writeFileSync(path.join(source,'index.html'),'A');fs.writeFileSync(path.join(source,'assets','same.js'),'a');prepareRelease(source,out,'A');
 fs.writeFileSync(path.join(source,'index.html'),'B');fs.writeFileSync(path.join(source,'assets','same.js'),'b');assert.throws(()=>prepareRelease(source,out,'B'),/Dependency collision/);assert.equal(fs.readFileSync(path.join(out,'index.html'),'utf8'),'A');
 fs.writeFileSync(path.join(source,'assets','qixi.js'),'withdrawn');assert.throws(()=>prepareRelease(source,out,'C'),/Excluded content/);assert.equal(fs.readFileSync(path.join(out,'index.html'),'utf8'),'A');
});
test('retain all releases within seven days and at least the newest two',()=>{const day=86400000,now=20*day;assert.deepEqual(retainedReleaseIds([{id:'A',at:0},{id:'B',at:2*day},{id:'C',at:15*day},{id:'D',at:18*day}],now),['D','C']);assert.deepEqual(retainedReleaseIds([{id:'A',at:0},{id:'B',at:1}],now),['B','A']);assert.equal(retainedReleaseIds(Array.from({length:8},(_,i)=>({id:String(i),at:now-i*day})),now).length,7);});
test('expired dependency cleanup is manifest-scoped and keeps rollback closure',()=>{const root=fs.mkdtempSync(path.join(os.tmpdir(),'release-fixture-'));const out=path.join(root,'release-fixture','output'),source=path.join(root,'input');fs.mkdirSync(source,{recursive:true});fs.writeFileSync(path.join(source,'index.html'),'A');fs.mkdirSync(path.join(source,'assets'));fs.writeFileSync(path.join(source,'assets','a.js'),'a');const a=prepareRelease(source,out,'A',0);fs.unlinkSync(path.join(source,'assets','a.js'));fs.writeFileSync(path.join(source,'assets','b.js'),'b');fs.writeFileSync(path.join(source,'index.html'),'B');const b=prepareRelease(source,out,'B',1);fs.unlinkSync(path.join(source,'assets','b.js'));fs.writeFileSync(path.join(source,'assets','c.js'),'c');const c=prepareRelease(source,out,'C',2);const pruned=pruneReleaseOutput(out,[a,b,c],'C',20*86400000);assert.ok(pruned.removed.includes('assets/a.js'));assert.ok(fs.existsSync(path.join(out,'assets','b.js')));assert.ok(fs.existsSync(path.join(out,'assets','c.js')));});

test('stored rollback checks entry and originals without duplicate versions',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'release-fixture-')),source=path.join(root,'input'),out=path.join(root,'output');
 fs.mkdirSync(path.join(source,'gallery/originals'),{recursive:true});fs.writeFileSync(path.join(source,'gallery/originals/photo.jpg'),'approved');fs.writeFileSync(path.join(source,'index.html'),'A');
 const a=prepareRelease(source,out,'A',0);fs.writeFileSync(path.join(source,'index.html'),'B');prepareRelease(source,out,'B',1);
 activateStoredRelease(out,'A');assert.equal(fs.readFileSync(path.join(out,'index.html'),'utf8'),'A');assert.equal(readManifests(out).length,2);
 assert.equal(a.files.filter(f=>f.path.includes('originals')).length,1);assert.ok(!fs.existsSync(path.join(out,'gallery/versioned')));
 fs.writeFileSync(path.join(source,'gallery/originals/photo.jpg'),'changed');assert.throws(()=>prepareRelease(source,out,'C'),/collision/);assert.equal(fs.readFileSync(path.join(out,'index.html'),'utf8'),'A');
 fs.writeFileSync(path.join(out,'release-manifests/A.entry.html'),'wrong');assert.throws(()=>activateStoredRelease(out,'A'),/closure/);
});
test('path traversal and unknown files are protected from cleanup',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'release-fixture-')),source=path.join(root,'input'),out=path.join(root,'output');
 fs.mkdirSync(source);fs.writeFileSync(path.join(source,'index.html'),'A');fs.mkdirSync(path.join(source,'assets'));fs.writeFileSync(path.join(source,'assets/a.js'),'a');const a=prepareRelease(source,out,'A',0);
 fs.writeFileSync(path.join(out,'assets/private.txt'),'unknown');
 assert.throws(()=>pruneReleaseOutput(out,[{...a,id:'bad',files:[...a.files,{path:'../victim',sha256:'a'.repeat(64),bytes:0}]}],'A'),/Unsafe/);assert.ok(fs.existsSync(path.join(out,'assets/private.txt')));
});
