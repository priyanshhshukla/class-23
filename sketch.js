const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1
var box1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box1=new box(200,100,50,50)
box2=new box(190,180,100,50)
ground1=new ground(200,350,800,20)


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display()
    ground1.display()
    box2.display()
}