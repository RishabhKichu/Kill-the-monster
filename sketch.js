var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
Constraint = Matter.Constraint;
var boxes = [];

var bg, monster1, monster2, hero1, hero2;
function preload() {
  bg = loadImage("images/GamingBackground.png");
  monster1 = loadImage("images/Monster-01.png");
  monster2 = loadImage("images/Monster-02.png");
  hero1 = loadImage("images/Superhero-01.png");
  hero2 = loadImage("images/Superhero-02.png");
}

function setup() {
  createCanvas(1280, 612);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, 300, width, 20);
  Hero = new Hero(200, 200, 60);
  Monster = new Monster(600, 200, 50, 50);
  Fly = new Fly(Hero.body, { x: 200, y: 100 });
  b1 = boxes.push(new Box(400, 270, 30, 30));
  b2 = boxes.push(new Box(400, 240, 30, 30));
  b3 = boxes.push(new Box(400, 210, 30, 30));
  b4 = boxes.push(new Box(400, 180, 30, 30));
  b5 = boxes.push(new Box(400, 150, 30, 30));
  b6 = boxes.push(new Box(400, 120, 30, 30));
  b7 = boxes.push(new Box(430, 270, 30, 30));
  b8 = boxes.push(new Box(430, 240, 30, 30));
  b9 = boxes.push(new Box(430, 210, 30, 30));
  b10 = boxes.push(new Box(430, 180, 30, 30));
  b11 = boxes.push(new Box(460, 270, 30, 30));
  b12 = boxes.push(new Box(460, 240, 30, 30));
  b13 = boxes.push(new Box(460, 210, 30, 30));
  b14 = boxes.push(new Box(460, 180, 30, 30));
  b15 = boxes.push(new Box(460, 150, 30, 30));
  b16 = boxes.push(new Box(460, 120, 30, 30));
  b17 = boxes.push(new Box(460, 270, 30, 30));
}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();
  Hero.display();
  Monster.display();

  for (i = 0; i < boxes.length; i++) {
    boxes[i].display();
  }
  // Fly.display();
}

function mouseDragged() {
  Matter.Body.setPosition(Hero.body, { x: mouseX, y: mouseY });
}
