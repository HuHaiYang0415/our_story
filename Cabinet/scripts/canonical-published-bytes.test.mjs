import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import crypto from 'node:crypto';import {spawnSync} from 'node:child_process';import {canonicalPublishedBytes,publishedGitSnapshot} from './canonical-published-bytes.mjs';
test('bootstrap restores only a verified CRLF checkout to deployed Git blob bytes',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'release-fixture-git-'));
 const git=(...args)=>{const r=spawnSync('git',args,{cwd:root,encoding:'utf8'});assert.equal(r.status,0,r.stderr);};
 git('init','-q');git('config','core.autocrlf','false');git('config','user.name','Release fixture');git('config','user.email','fixture@example.invalid');
 fs.mkdirSync(path.join(root,'assets'));fs.writeFileSync(path.join(root,'index.html'),'entry\n');fs.writeFileSync(path.join(root,'assets/a.js'),'const a=1;\n');git('add','index.html','assets/a.js');git('commit','-qm','fixture');
 fs.writeFileSync(path.join(root,'assets/a.js'),'const a=1;\r\n');
 assert.deepEqual(canonicalPublishedBytes(root),['assets/a.js']);assert.equal(fs.readFileSync(path.join(root,'assets/a.js'),'utf8'),'const a=1;\n');
 fs.writeFileSync(path.join(root,'assets/a.js'),'real edits\r\n');assert.throws(()=>canonicalPublishedBytes(root),/real edits/);assert.equal(fs.readFileSync(path.join(root,'assets/a.js'),'utf8'),'real edits\r\n');
});


test('Git bootstrap includes top-level manifest and protects generated entry and real edits',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'release-fixture-git-'));const git=(...args)=>{const r=spawnSync('git',args,{cwd:root,encoding:'utf8'});assert.equal(r.status,0,r.stderr);};
 git('init','-q');git('config','core.autocrlf','false');git('config','user.name','Release fixture');git('config','user.email','fixture@example.invalid');
 fs.writeFileSync(path.join(root,'index.html'),'old\n');fs.writeFileSync(path.join(root,'manifest.webmanifest'),'{"name":"approved"}\n');git('add','index.html','manifest.webmanifest');git('commit','-qm','fixture');
 fs.writeFileSync(path.join(root,'index.html'),'generated\n');fs.writeFileSync(path.join(root,'manifest.webmanifest'),'{"name":"approved"}\r\n');
 const hash=crypto.createHash('sha256').update('generated\n').digest('hex'),snapshot=publishedGitSnapshot(root,[hash]);
 assert.equal(snapshot.entry.toString(),'old\n');assert.equal(snapshot.files.length,2);assert.ok(snapshot.files.some(f=>f.path==='manifest.webmanifest'));
 assert.equal(fs.readFileSync(path.join(root,'manifest.webmanifest'),'utf8'),'{"name":"approved"}\n');assert.equal(fs.readFileSync(path.join(root,'index.html'),'utf8'),'generated\n');
 fs.writeFileSync(path.join(root,'manifest.webmanifest'),'changed');assert.throws(()=>publishedGitSnapshot(root,[hash]),/real edits/);
});
