const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const tamanho = 50;

let posX = canvas.width / 2;
let posY = canvas.height / 2;

let particles = [];

const player = new Image();
player.src = "https://cdn-icons-png.flaticon.com/512/616/616554.png";

canvas.addEventListener("mousemove", (event) => {

    const rect = canvas.getBoundingClientRect();

    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    posX = mouseX - tamanho / 2;
    posY = mouseY - tamanho / 2;

    if(posX < 0){
        posX = 0;
    }

    if(posY < 0){
        posY = 0;
    }

    if(posX > canvas.width - tamanho){
        posX = canvas.width - tamanho;
    }

    if(posY > canvas.height - tamanho){
        posY = canvas.height - tamanho;
    }

    for(let i = 0; i < 3; i++){

        particles.push({
            x: mouseX,
            y: mouseY,
            radius: Math.random() * 4 + 1,
            opacity: 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2
        });

    }

});

function drawBackground(){

    for(let i = 0; i < 50; i++){

        ctx.fillStyle = "rgba(255,255,255,0.05)";

        ctx.beginPath();

        ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            1,
            0,
            Math.PI * 2
        );

        ctx.fill();
    }
}

function drawParticles(){

    for(let i = 0; i < particles.length; i++){

        let p = particles[i];

        ctx.beginPath();

        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(56,189,248,${p.opacity})`;

        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        p.opacity -= 0.02;

        if(p.opacity <= 0){

            particles.splice(i, 1);
            i--;

        }
    }
}

function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();

    drawParticles();

    ctx.shadowColor = "#38bdf8";
    ctx.shadowBlur = 20;

    ctx.drawImage(player, posX, posY, tamanho, tamanho);

    requestAnimationFrame(animate);
}

player.onload = () => {
    animate();
};