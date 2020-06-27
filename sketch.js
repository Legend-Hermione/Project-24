var  paper1,paperIMG;
var packageBody,ground;
var boxBottom,boxLeft,boxRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;



function setup() {
	createCanvas(1000, 600);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	
	 boxBottom=createSprite((width/2)+200,height-50,200,20);
	boxBottom.shapeColor=color("red");

	 boxLeft=createSprite((width/2-90)+200,height-95,20,100);
	boxLeft.shapeColor=color("red");

	 boxRight=createSprite((width/2+90)+200,height-95,20,100);
	boxRight.shapeColor=color("red");


	paper1= new Paper(200,300,20);


	ground= new Ground(width/2,height-35,width,20);
	
	 boxBottom= Bodies.rectangle(width/2, height-50, 200, 20 , {isStatic:true} );
	 World.add(world,boxBottom);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  paper1.display();
 
}
 
	


