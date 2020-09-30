var car,wall;
var engine,world;
var speed,weight;
var Deformation;

function setup() {
  createCanvas(1600,400);
  

  speed = random(55,90);
  weight = random(750,1500);

  car = createSprite(100, 100, 20, 20,);
  car.velocityX = speed;
  car.shapeColor = "White";
  wall = createSprite(1500,100,50,200,);
  wall.shapeColor = "White";
  
  Deformation = 0.5*weight*speed*speed/22500;
}

function draw() {
  background(0);  
  car.collide(wall);

  if (Deformation <= 100 && isTouching(car,wall)){
    car.shapeColor = "Green";
  }
  if (Deformation > 100 && Deformation < 180 && isTouching(car,wall)){
    car.shapeColor = "Orange";
  }
  if (Deformation >= 180 && isTouching(car,wall)){
    car.shapeColor = "Red";
  }

  drawSprites();
}