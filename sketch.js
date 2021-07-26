
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bin1 = new Dustbin(650,650,200,20);
	bin2 = new Dustbin(550,600,20,100);
	bin3 = new Dustbin(750,600,20,100);

	ground = new Ground(400,670,800,20);

	paper = new Paper(100,600,40,40);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
bin1.display();
bin2.display();
bin3.display();
paper.display();
ground.display();

  drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

 }
}



