var bg,sleep,brush,gym,eat,drink,move,bath;
var bgImg;
var astronaut;
var topEdge,left,right,bottom;
 var brushing,gymming,eating,drinking,moving,bathing;







function preload(){
  bgImg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png");
  eat = loadAnimation("eat1.png");
  drink = loadAnimation("drink1.png");
  move = loadAnimation("move.png");
  bath = loadAnimation("bath1.png");


}



function setup() {
  createCanvas(800,400);
  bg = createSprite(200,200);
  bg.addImage("bg",bgImg);
  bg.scale = 0.1

  astronaut = createSprite(200,200);
  astronaut.addAnimation("astronaut",sleep);
  astronaut.scale = 0.1;
  astronaut.velocityX = 5;


  topEdge = createSprite(200,5,470,5);
  bottom = createSprite(200,395,470,5);
  right = createSprite(490,5,5,490);
  left = createSprite(5,200,5,490);

  topEdge.visible = false;
  bottom.visible = false;
  right.visible = false;
  left.visible = false;



  createEdgeSprites();
}

function draw() {
  background(255,255,255);  
 
  astronaut.bounceOff(topEdge);
  astronaut.bounceOff(right);
  astronaut.bounceOff(left);
  astronaut.bounceOff(bottom);

if(keyDown(UP_ARROW)){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown(LEFT_ARROW)){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown(DOWN_ARROW)){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 230;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("space")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y = 200;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
}

if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y = 200;
  astronaut.velocityX = 3;
  astronaut.velocityY = 4;
 
}



 
  drawSprites();
  fill(255);
  text("Instructions",7,80);
  text("UP ARROW = BRUSHING",7,90);
  text("LEFT ARROW = GYMMING",7,100);
  text("RIGHT ARROW = EATING",7,110);
  text("DOWN ARROW = BATHING",7,120);
  text("M = MOVING",7,130);
}