var clouds,cloud,cloud1,cloud2,cloudimg;
var chimmy,chimmyimg;
var backgimg,backg;
var bt21,bt21img;
var eagle,eagleimg;
var obs,obsgroup;


function preload(){
  backgimg  = loadImage("images/blue.png");  
  bt21img   = loadImage("images/bt21.png");  
  eagleimg  = loadAnimation("images/1.png")
  cloudimg  = loadImage("images/cloud.png");
  4
}

function setup(){
  createCanvas(1500,800);

  backg = createSprite(1000,1000,10,10);
  backg.addImage(backgimg);
  backg.scale = 4;
  backg.velocityX = -4;

  bt21 = createSprite(200,300,20,20);
  bt21.addImage(bt21img);
  backg.scale = 0.01;

  eagle = createSprite(500,100,30,30);
  eagle.addAnimation('e',eagleimg);

  clouds   = new Group();
  obsgroup = new Group();

  


}

function draw(){
background(backgimg)
  
  if(backg.x<0){
    backg.x = backg.width/2;
  }

  if(keyDown("left")){
    bt21.velocityX = -3;
  }
  

  if(keyDown("right")){
    bt21.velocityX = 3;
  }
 

  if(keyDown("up")){
    bt21.velocityY = -3;
  }
 

  if(keyDown("down")){
    bt21.velocityY = 3;
  }

  bt21.velocityX = bt21.velocityX + 0;
 

  spawnClouds();
  spawnObs();

  drawSprites();
}

function spawnClouds() {
  if (frameCount % 60 === 0) {
    var cloud = createSprite(1000,200,40,10);
    cloud.y   = Math.round(random(80,700));
    cloud.addImage(cloudimg);
    cloud.velocityX = -3;     
    cloud.lifetime = 400;
    cloud.depth = bt21.depth;
    bt21.depth  = bt21.depth + 1;
    clouds.add(cloud);
  }
}

function spawnObs() {
  if (frameCount % 400 === 0) {
    var obs = createSprite(1000,200,40,10);
    obs.y   = Math.round(random(80,700));
    obs.addAnimation("eag",eagleimg);
    obs.velocityX = -3;     
    obs.lifetime = 400;
    obs.depth   = bt21.depth;
    bt21.depth  = bt21.depth + 1;
    obsgroup.add(obs);
  }
}