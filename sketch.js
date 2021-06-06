var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var player;

function preload()
{
 
}

function setup() {
  createCanvas(1250,700);
  carGroup1 = new Group();
  logGroup1 = new Group();

  

  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(563,height-50-(i*400),1370,grassHeight);
    if(i%2===0)
    {
      var road = createSprite(63,height-150-(i*400)-grassHeight,2500,300)
      road.shapeColor="black";
    }
    bottomGrass1.shapeColor = "green";
  
 }

 for(i=1;i<logGroup1.length;i++){
  if(logGroup1[i].x<0)
  {
    logGroup1[i].x=width;
  }
}
 

for(i=1;i<carGroup1.length;i++){
  if(carGroup1[i].x<0)
  {
    carGroup1[i].x=width;
  }
}
 
 for(var i = 0; i < 40; i++){
  log = new Log(2);
  logGroup1.add(log.spt);
}

for(var i = 0; i < 40; i++){
  cars = new Car(2);
  carGroup1.add(cars.spt);
}
}



function draw() {
  player = new Player(20,20);
  background("skyblue");
  
  translate(0,-player.spt.y+height-150);

  if(keyDown("left"))
  {
    player.moveLeft();
  }

  if(keyDown("right"))
  {
    player.moveRight();
  }

  if(keyDown("up"))
  {
    player.moveUp();
  }

  if(keyDown("down"))
  {
    player.moveDown();
  }

  drawSprites();
}



