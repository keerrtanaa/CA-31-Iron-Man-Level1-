var ironman;
var bg, bgImg;

function preload() {
  bgImg = loadImage("images/bg.jpg");
  ironman= loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(bgImage);
  bg.scale = 2;
 

  ironman=createSprite(200,505,20,50);
  ironman.addImage(ironman);
  ironman.scale =0.3;

  ground =createSprite(200,585,400,10);
ground.visible = false; 
}

function draw() {
  if(keyDown("up")){
  ironman.velocityY =-10;
  }

  if (keyDown("left")){
    ironman.x = velocity.x =-5;
  }
  
  if (keyDown("right")){
    ironman.x = velocity.x = +5;
  }

  ironman.velocityY =ironman.velocityY +  0.5;

    drawSprites();
   
}

