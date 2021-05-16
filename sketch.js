const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3; 
function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(200,200, 50);
    ground = new Ground(400,680,800,20);
    dustbin1 = new Bin(560,665, 90, 10);
    dustbin2 = new Bin(510,610,10,105);
    dustbin3 = new Bin(610,610,10,105)

    Launch= new Launch(paper1.body,{x:200, y:200})

    Engine.run(engine);
}

function draw() {
  
  rectMode(CENTER);

  background("white");
  
  //Engine.update(engine);
    
  

  ground.display();

  dustbin3.display();
  dustbin2.display();
  dustbin1.display();
 
  paper1.display();
  Launch.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 32,y: -32})
    }
  }

  function mouseDragged(){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Launch.fly();
}