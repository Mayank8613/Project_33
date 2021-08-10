var jack, snowflake;

function setup() {
  createCanvas(1200,600);
  jack = createSprite(800, 450, 50, 200);
  snowflake = new Snow(400,400);
}

function preload() {
  bg = loadImage("snow1.jpg");
}

function draw() {
  background(bg);
  jack.velocityX = -5;
  snowflake.display();
  drawSprites();
}