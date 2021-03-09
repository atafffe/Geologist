
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var sand1, sand2, sand3;
var iron;
var hammer;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,600,800,25);

	stone = new Stone(250,500);
	sand1 = new Sand(200,25);
	sand2 = new Sand(270,25);
	sand3 = new Sand(340,25);
	iron = new Iron(500,150);
	hammer = new Hammer(300,60);
	ball = new Ball(400,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
	
  ground.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  iron.display();
  hammer.display();
  ball.display();
}



