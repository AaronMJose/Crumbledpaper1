
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbl,dustbr,dustbb ;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	paper = new Paper(100,550,20,{isStatic:true});
	World.add(world,paper);

   ground = new Ground(600,650,1200,30);
   World.add(world,ground);

   dustbl = new Dustbin (1080, height-60, 200, 20, {isStatic:true});
	dustbl.shapeColor=color("red");
	World.add(world,dustbl);

    dustbr =  new Dustbin(980, height-100, 20, 100, {isStatic:true});
	dustbr.shapeColor=color("red");
	World.add(world,dustbr);

	dustbb= new Dustbin(1180, height-100, 20, 100, {isStatic:true});
	dustbb.shapeColor=color("red");
	World.add(world,dustbb);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  dustbl.display();
  dustbr.display();
  dustbb.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
	

}
