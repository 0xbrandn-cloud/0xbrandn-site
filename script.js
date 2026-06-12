function animateCounter(id,target){

let count=0;

const timer=setInterval(()=>{

count += Math.ceil(target/40);

if(count>=target){
count=target;
clearInterval(timer);
}

document.getElementById(id).innerText=count;

},40);

}

animateCounter("projects",8);
animateCounter("labs",150);
animateCounter("focus",4);

const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const particles=[];

for(let i=0;i<90;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,

vx:(Math.random()-.5)*1,
vy:(Math.random()-.5)*1

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=0;i<particles.length;i++){

const p=particles[i];

p.x += p.vx;
p.y += p.vy;

if(p.x<0||p.x>canvas.width) p.vx*=-1;
if(p.y<0||p.y>canvas.height) p.vy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#00e5ff";
ctx.fill();

for(let j=i+1;j<particles.length;j++){

const p2=particles[j];

const dx=p.x-p2.x;
const dy=p.y-p2.y;

const dist=Math.sqrt(dx*dx+dy*dy);

if(dist<120){

ctx.strokeStyle=`rgba(0,229,255,${1-dist/120})`;

ctx.beginPath();
ctx.moveTo(p.x,p.y);
ctx.lineTo(p2.x,p2.y);
ctx.stroke();

}

}

}

requestAnimationFrame(draw);

}

draw();