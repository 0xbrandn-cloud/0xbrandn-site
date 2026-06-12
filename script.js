function animateCounter(id,target){
    let value=0;

    const timer=setInterval(()=>{
        value += Math.ceil(target/40);

        if(value>=target){
            value=target;
            clearInterval(timer);
        }

        document.getElementById(id).innerText=value;
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

for(let i=0;i<100;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*2+1
    });
}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.y += 0.5;

        if(p.y > canvas.height){
            p.y = 0;
        }

        ctx.fillStyle="cyan";
        ctx.fillRect(p.x,p.y,p.size,p.size);

    });

    requestAnimationFrame(draw);
}

draw();