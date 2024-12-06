// Services Page Skills Js
//1
function clickSwap1(){
let click = document.getElementById("click1");
if(click.style.height != '500px')
{
click.style.height = '500px'
}
else{
  click.style.height = '120px'
}
}
//2
function clickSwap2(){
  let click = document.getElementById("click2");
  if(click.style.height != '500px')
  {
  click.style.height = '500px'
  }
  else{
    click.style.height = '120px'
  }
  }

  
//3
function clickSwap3(){
  let click = document.getElementById("click3");
  if(click.style.height != '500px')
  {
  click.style.height = '500px'
  }
  else{
    click.style.height = '120px'
  }
  }


  
//4
function clickSwap4(){
  let click = document.getElementById("click4");
  if(click.style.height != '500px')
  {
  click.style.height = '500px'
  }
  else{
    click.style.height = '120px'
  }
  }


  
//5
function clickSwap5(){
  let click = document.getElementById("click5");
  if(click.style.height != '500px')
  {
  click.style.height = '500px'
  }
  else{
    click.style.height = '120px'
  }
  }


//6
function clickSwap6(){
  let click = document.getElementById("click6");
  if(click.style.height != '500px')
  {
  click.style.height = '500px'
  }
  else{
    click.style.height = '120px'
  }
  }

  // Locomotive Script
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-wrapper'),
    smooth: true,
    lerp: 0.09,
});


//https://www.superhi.com/video/smooth-movements-with-javascript

const ball = document.querySelector("div.ball");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.09;


function animate(){
  
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;
  
  
  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);
  
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
  
  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
})


