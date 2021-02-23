function setup() {
  var ground
  createCanvas(800,400);
  ground =  new Ground(600,height,800,20);
}

function draw() {
  background(255,255,255);
  ground.display();  
  drawSprites();
}