//  Chloe Rodriguez Stangle
// 	11-8-19
//  This is a comment
//  The setup function function is called once when your program begins
var score = 0;
var snake;
var gameState;
var numCol, snakeWidth;
var isEaten
var runObjects
var counter = 0
var ball;

function setup() {
  var cnv = createCanvas(500, 500);

  snakeWidth = 25;
  numCol= width/snakeWidth;
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  frameRate(11);
  fill(200, 30, 150);
  ball = new Ball(random(500), 0)
  snake = new Snake (Math.floor(random(numCol))*snakeWidth, Math.floor(random(numCol))*snakeWidth, snakeWidth, ball);
  
  food = new Food(Math.floor(random(numCol))*snakeWidth, Math.floor(random(numCol))*snakeWidth, snakeWidth);
  
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 50, 100);
  if(food.isEaten()){
      food = new Food(Math.floor(random(numCol))*snakeWidth, Math.floor(random(numCol))*snakeWidth, snakeWidth, 2);
      //add a segment
      snake.grow();
  }
  snake.run();
  food.run();
  ball.run();
}

  function newGame(){
    newGame();
  }


  //food.run();
  //newGame();
  //startNewRound();

function checkTangled(){
  return snake.tangled()
}

function startNewRound(){
  update(20); //update score by 20
  //make snake grow by one segment
  //move food to a random place

}

function newGame(){
  score = 0
//create snake objects
//create food objects
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    snake.vel.x= -1*snakeWidth;
    snake.vel.y= 0;

  }

  if (keyCode === RIGHT_ARROW) {
    snake.vel.x=1*snakeWidth;
    snake.vel.y=0;
  }

  if (keyCode === DOWN_ARROW) {
    snake.vel.x= 0;
    snake.vel.y= 1*snakeWidth;

  }
   if (keyCode === UP_ARROW) {
    snake.vel.x= 0;
    snake.vel.y= -1*snakeWidth;
  }

  if (keyCode === 32) {
   snake.vel.x = 0;
   snake.vel.y = 0;
 }

  //adjust snake vel
}

function run(){
  update();
  render();
  checkEdges();
}

function gotFood(){
  snake.row===food.row
  snake.col===food.col
}
