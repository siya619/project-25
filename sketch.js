const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var dustbin, dump;
var ground;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    dustbin = new Dustbin(700,320,70,70);

    dump = new dump(100,100);

    ground = new Ground(600,height,1200,20);

}

function draw() {
    rectMode(CENTER);
    background("black");
    dumpSprite.x= dumpBody.position.x 
    dumpSprite.y= dumpBody.position.y 
    drawSprites();
  }
  
  function keyPressed() {
   if (keyCode === UP_ARROW) {
       dustbin.y = dustbin.y - 2;
   }
  }
  