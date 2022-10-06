var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// //2D design this === the same as the bottom section without repeating c.gContext+
// canvas.getContext('2d').fillRect(100,100,100,100)

//BOX
var c = canvas.getContext("2d");

c.fillStyle = "rgba(255,0,0,0.5)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(255,0,0,0.5)";
c.fillRect(550, 200, 250, 100);

//LINE
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(100, 450);
c.strokeStyle = "blue";
c.stroke();

//CIRCLE
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle= 'blue'
c.stroke();

// RANDOM CIRCLES
for (var i = 0; i <500 ; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y,39,0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
}

//ANIMATE
var x = 200;
//velocity
var dx = 100;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x, 200, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
  x += dx;
}
animate();

console.log(canvas);