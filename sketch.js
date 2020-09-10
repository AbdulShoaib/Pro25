
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

	
	
	//Create the Bodies Here.
	dustbin= new Dustbin(400,655,10,50)
	dustbin2= new Dustbin(500,655,10,50)
	dustbin3= new Dustbin(450,655,90,50)
	ground= new Ground(200,700,1200,30)
	paper = new Paper(200,200,30)
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 dustbin.display();
 dustbin2.display();
 dustbin3.display();
 ground.display();
 paper.display();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
		
	}
}



