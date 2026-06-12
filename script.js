
function animate(id,target){
 let v=0;
 const t=setInterval(()=>{
   v+=Math.ceil(target/40);
   if(v>=target){v=target;clearInterval(t);}
   document.getElementById(id).textContent=v;
 },40);
}
animate('c1',12);
animate('c2',150);
animate('c3',8);

const c=document.getElementById('bg');
const ctx=c.getContext('2d');
function resize(){c.width=innerWidth;c.height=innerHeight;}
resize();addEventListener('resize',resize);

let p=[...Array(80)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,v:0.5+Math.random()}));
function draw(){
 ctx.clearRect(0,0,c.width,c.height);
 p.forEach(a=>{
   a.y+=a.v;
   if(a.y>c.height)a.y=0;
   ctx.fillStyle='rgba(0,255,255,.7)';
   ctx.fillRect(a.x,a.y,2,2);
 });
 requestAnimationFrame(draw);
}
draw();
