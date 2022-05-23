let ground;
let lander;
var lander_img;
var bg_img;
var close;
var button1, button2, button3;
var a1, a2, a3;
var vx = 0;
var g = 0.01;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  a1 = loadImage("a1.png");
  a2 = loadImage("a2.png");
  a3 = loadImage("a3.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
  button1 = createImg("a1.png");
  button1.position(20,600);
  button1.size(100,100);
  button1.mouseClicked(message);

  button2 = createImg("a2.png");
  button2.position(500,350);
  button2.size(80,100);
  button2.mouseClicked(mission1);

  button3 = createImg("a3.png");
  button3.position(200,350);
  button3.size(80,100);
  button3.mouseClicked(thrust);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  if(lander.position.y>500){
    vy=0;
    lander.position.y=500;
    
    close();
   
  }

  else{

  
  vy +=g;
  lander.position.y+=vy;
  }
 
  drawSprites();
}

function close(){
  
  swal({
    text: "GAME OVER",
   
  }) ;
 window.location="https://lakshitaparmar4.github.io/lunar-lander-2/";
  
}
function mission1(){
  background("pink");
  noStroke();
  text("hello",400,350);
}
function thrust(){
  vy=-1;
}
function message () {
swal("THE SUSPECIOUS THING IS COMING");
}
