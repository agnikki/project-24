
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	ball = new Ball(380,380,100)
	ground = new Ground(385,685,840,15);
	box = new Box(560,620,20,100);
	box1 = new Box(670,665.5,200,20);
	box2 = new Box(780,620,20,100);
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  ball.display();
  ground.display();
  box.display();
  box1.display();
  box2.display();
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW) {

Matter.Body.applyForce(ball.y,ball.body.position,{x:85,y:85});
     }
}


