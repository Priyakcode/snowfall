var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;

var engine, world;
var snow = [];
var bgImg;
var boy;

function preload() {
  bgImg = loadImage ("snow1.jpg");
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  boy= new Boy(200,500,50,50);
}

function draw() {
  background(bgImg); 
  Engine.update(engine);

      if(frameCount%10===0){
       snow.push(new Snow(random(0,800),0,30));

      }

      for (var s= 0; s<snow.length; s++) {
        snow[s].display();
      } 
boy.display();
   
}