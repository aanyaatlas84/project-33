var backgroundImg
var snowflake

function preload() {
  backgroundImg = loadImage("snow2.jpg");
  snowflakeImg = loadAnimation("snow4.webp", "snow5.webp");
}


function setup() {
  createCanvas(800,400);
  snowflake = createSprite(300,300);
  snowflake.addAnimation("snowfalling", snowflakeImg);
  snowflake.scale = 1;
}

function draw() {
  background(backgroundImg);  
  snowflake.display();
  drawSprites();
}