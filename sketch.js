const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  var canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  var ball_options = {
    restitution: 1
  }

  ground = Bodies.rectangle(200,390,400,10, ground_options);
  ground.width = 400;
  ground.height = 10;
  World.add(world, ground);

  ball = Bodies.circle(200,200,20, ball_options);
  ball.radius = 20;
  World.add(world, ball);

  console.log(ground);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, ground.width, ground.height);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, ball.radius, ground.radius);
}