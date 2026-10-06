import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import crypto from 'node:crypto';
/** First bootstrap only: Git blob bytes are the already deployed baseline, not a CRLF checkout. */
export function canonicalPublishedBytes(repo) {
 const listing=spawnSync('git',['-c','core.quotepath=false','ls-files','--eol','-z','--','index.html','assets','pages','gallery','manifest.webmanifest'],{cwd:repo,encoding:'utf8'});
 if(listing.status)throw Error('Cannot inspect publication checkout');
 const names=listing.stdout.split('\0').filter(line=>/w\/crlf\s/.test(line)).map(line=>line.slice(line.indexOf('\t')+1));
 if(!names.length)return [];
 const batch=spawnSync('git',['cat-file','--batch'],{cwd:repo,input:names.map(n=>'HEAD:'+n).join('\n')+'\n',maxBuffer:64*1024*1024});
 if(batch.status)throw Error('Cannot read published Git bytes');
 const bodies=[];let at=0;
 for(const name of names){
  const end=batch.stdout.indexOf(10,at),header=batch.stdout.subarray(at,end).toString('ascii'),size=Number(header.split(' ')[2]);
  if(!header.includes(' blob ')||!Number.isSafeInteger(size))throw Error('Published blob missing');
  const body=batch.stdout.subarray(end+1,end+1+size);at=end+1+size+1;
  const file=path.join(repo,name),current=fs.readFileSync(file);
  const converted=Buffer.from(body.toString('utf8').replace(/\r?\n/g,'\r\n'));
  if(!current.equals(body)&&!current.equals(converted))throw Error('Published checkout has real edits: '+name);
  bodies.push({file,body,name});
 }
 // Validate the entire set before restoring any canonical baseline byte.
 for(const {file,body} of bodies)fs.writeFileSync(file,body);
 return bodies.map(b=>b.name);
}

/** First real publication bootstraps HEAD's complete public tree, never a generated/untracked tree. */
export function publishedGitSnapshot(repo, knownEntryHashes = []) {
 const listing=spawnSync('git',['ls-tree','-r','-z','HEAD','--','index.html','assets','pages','gallery','manifest.webmanifest','icon.png'],{cwd:repo,encoding:'utf8'});
 if(listing.status)throw Error('Cannot inspect published Git tree');
 const records=listing.stdout.split('\0').filter(Boolean).map(line=>{const [header,name]=line.split('\t');return {name,oid:header.split(' ')[2]};});
 const files=[],restored=[];let entry;
 const sha=body=>crypto.createHash('sha256').update(body).digest('hex');
 const gitSha=body=>crypto.createHash('sha1').update(Buffer.from('blob '+body.length+'\0')).update(body).digest('hex');
 const writes=[];
 for(const {name,oid} of records){
  const file=path.join(repo,name),current=fs.readFileSync(file);let body=current;
  if(gitSha(current)!==oid){
   const read=spawnSync('git',['cat-file','blob',oid],{cwd:repo,maxBuffer:32*1024*1024});if(read.status)throw Error('Cannot read published blob');body=read.stdout;
   if(name==='index.html'){
    if(!knownEntryHashes.includes(sha(current))&&!current.equals(Buffer.from(body.toString('utf8').replace(/\r?\n/g,'\r\n'))))throw Error('Published entry has real edits');
   }else{
    if(!current.equals(Buffer.from(body.toString('utf8').replace(/\r?\n/g,'\r\n'))))throw Error('Published dependency has real edits: '+name);
    writes.push({file,body});restored.push(name);
   }
  }
  files.push({path:name,sha256:sha(body),bytes:body.length});if(name==='index.html')entry=body;
 }
 if(!entry)throw Error('Published Git entry missing');
 for(const {file,body} of writes)fs.writeFileSync(file,body);
 return {files,entry,restored};
}
