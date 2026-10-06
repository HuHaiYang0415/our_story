import { test } from 'node:test'; import assert from 'node:assert/strict';
import { visibleTiles } from './xyz'; import { MAP_WIDTH, MAP_HEIGHT, unprojectWebMercatorPoint } from './geography';
test('half-open visible tiles cover every sampled screen point, including islands and cross-tile boundaries', () => {
  for (const viewport of [{width:1440,height:764},{width:390,height:708},{width:360,height:504},{width:844,height:254}]) for (const zoom of [1,4,15.99,16,512,4096]) for (const panX of [-300,0,300]) {
    const fit=.5,state={zoom,panX,panY:200},tiles=visibleTiles(state,fit,viewport),n=2**Math.max(3,Math.min(16,Math.floor(3+Math.log2(zoom))));
    const keys=new Set(tiles.map(t=>t.key)); assert.equal(keys.size,tiles.length); assert.ok(tiles.every((t,i)=>i===0||t.distance>=tiles[i-1].distance));
    for(let x=0;x<viewport.width;x+=31)for(let y=0;y<viewport.height;y+=29){const p=unprojectWebMercatorPoint({x:MAP_WIDTH/2-panX/zoom+(x-viewport.width/2)/(fit*zoom),y:MAP_HEIGHT/2-200/zoom+(y-viewport.height/2)/(fit*zoom)});const tx=Math.floor(p.x*n),ty=Math.floor(p.y*n);if(tx>=0&&tx<n&&ty>=0&&ty<n)assert.ok(keys.has(`${Math.log2(n)}/${tx}/${ty}`));}
  }
});
test('unmeasured viewport makes no request; max scale preserves formal z15',()=>{assert.deepEqual(visibleTiles({zoom:1,panX:0,panY:0},.01,{width:1,height:1}),[]);assert.equal(visibleTiles({zoom:4096,panX:0,panY:0},1,{width:390,height:640})[0].z,15);});
