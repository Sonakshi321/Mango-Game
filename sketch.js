
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;

var stone1;

var m1;
var m2;
var m3;
var m4;
var m5;

var chain1;

var ground1;

var tree1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     boy1 = new Boy(100,100);
     stone1 = new Stone(230,180,80,PI/2);
     ground1 = new Groundi(600,height,1200,20);
     tree1 = new Tree(810,160,70,70);
     chain1 = new Chain(boy1.body,stone.body);
     m1 = new Mango(805,160);
     m2 = new Mango(815,160);
     m3 = new Mango(125),160;
     m4 = new Mango(810,160);
     m5 = new Mango(807,160);
	Engine.run(engine);
  
}

{
this.stone.bodyA=null;
}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  boy1.display();
  stone1.display();

  detectCollision(stone1,m1);
  detectCollision(stone1,m2);
  detectCollision(stone1,m3);
  detectCollision(stone1,m4);
  detectCollision(stone1,m5);
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mousex,y:mouseY})
}

function mouseReleased(){
  stone1.fly()
}

function detectCollision(stone1,mango1){
  mangoBodyPosition=mango.Body.Position;
  stoneBodyPosition=stone1.Body.Position;

  var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=mango1.r+stone1.r)
  {
    Matter.Body.setStatic(mango1.body,false);
  }

}


function keyPressed(){
if (keyCode === 32){
  Matter.Body.setPosition(stone1.body,{x:235, y:420});
  launcherObject.attach(stone1.body);
}
}
