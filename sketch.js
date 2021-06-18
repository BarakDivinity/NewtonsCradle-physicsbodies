var bobObject1,obObject2,obObject3,obObject4,obObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	  roof = new Roof(400,200)

    bobObject1 = new Bob(310,400)
	  bobObject2 = new Bob(355,400)
    bobObject3 = new Bob(400,400)
    bobObject4 = new Bob(445,400)
    bobObject5 = new Bob(490,400)

    rope1= new Rope(bobObject1.body,roof.body,-100,10)	
    rope2= new Rope(bobObject2.body,roof.body,-50,10)	
    rope3= new Rope(bobObject3.body,roof.body,0,10)	
    rope4= new Rope(bobObject4.body,roof.body,50,10)	
    rope5= new Rope(bobObject5.body,roof.body,100,10)	

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Body.applyForce(bobObject1.body,bobObject1.body.position,{x:10,y:10});
  }
}

