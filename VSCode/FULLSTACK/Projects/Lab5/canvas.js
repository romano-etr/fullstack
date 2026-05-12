let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath ();
ctx.fillStyle = '#808080';
ctx.fillRect (0,300,400,400);
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#86471a';
ctx.fillRect (150,200,100,100);
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#f5694d';
ctx.moveTo (200,150);
ctx.lineTo (250,200);
ctx.lineTo (150,200);
ctx.fill ();
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#fcff2d';
ctx.arc (300,100,50,0*Math.PI,2*Math.PI);
ctx.fill ();
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#458efc';
ctx.arc (0,300,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill ();
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#458efc';
ctx.arc (150,400,50,1*Math.PI,2*Math.PI);
ctx.fill ();
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#458efc';
ctx.moveTo (150,350);
ctx.lineTo (50,350);
ctx.lineTo (50,300);
ctx.lineTo (0,300);
ctx.lineTo (0,400);
ctx.lineTo (150,400);
ctx.fill ();
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#47bdfd';
ctx.fillRect (160,210,30,30);
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#47bdfd';
ctx.fillRect (210,210,30,30);
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#624423';
ctx.fillRect (190,240,20,60);
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#86471a';
ctx.fillRect (50,240,20,60);
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#318a26';
ctx.arc (60,235,30,0*Math.PI,2*Math.PI);
ctx.fill ();
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#86471a';
ctx.fillRect (340,290,20,60);
ctx.closePath ();

ctx.beginPath ();
ctx.fillStyle = '#318a26';
ctx.arc (350,285,30,0*Math.PI,2*Math.PI);
ctx.fill ();
ctx.closePath ();


let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

ctx2.beginPath ();
ctx2.fillStyle = 'blue';
ctx2.fillRect (0,0,50,50);
ctx2.closePath ();

ctx2.beginPath ();
ctx2.fillStyle = 'red';
ctx2.fillRect (300,0,-50,50);
ctx2.closePath ();

ctx2.beginPath ();
ctx2.fillStyle = 'black';
ctx2.moveTo (300,300);
ctx2.lineTo (240,300);
ctx2.lineTo (240,270);
ctx2.lineTo (270,270);
ctx2.lineTo (270,240);
ctx2.lineTo (300,240);
ctx2.fill ();
ctx2.closePath