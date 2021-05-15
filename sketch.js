const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(700,240,70,70);
    box5 = new Box(700,160,70,70);
    ball1 = new Ball(100,100);
  

   

    //log6 = new Log(230,180,80, PI/2);
    sling1 = new SlingShot(ball1.body, { x : 250 , y: 100});
}

function draw(){
   background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   

    box3.display();
    box4.display();
   

    box5.display();
    

    ball1.display();
    
    sling1.display();    
}

function mouseDragged () {
    Matter.Body.setPosition(ball1.body, {x : mouseX , y : mouseY})
}
