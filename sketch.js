var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,red1,reds,basered,base;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	base=createSprite(400,height-45,200,20);
base.shapeColor=("red")
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.5, isStatic:true});
	World.add(world, packageBody);
	
   basered = Bodies.rectangle(400,height-65,200,20, {isStatic: true});
 
     World.add(world, basered)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic: true});
	 World.add(world, ground)
	 

red3=new redzone(310,height-85,20,100)
red2=new redzone(490,height-85,20,100)
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  red2.display();
  red3.display();
  drawSprites();
 if(keyDown("space")) {
	Matter.Body.setStatic(packageBody, false);
 }
}
