//  Chloe Rodriguez Stangle
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
balls =[]
orbiters =[]

function setup() {
  createCanvas(500, 500);
  loadBalls();
  loadOrbiters();  
}

function draw() {
  background(220);
  for (i = 0; i < balls.length; i++) {//making it run
      balls[i].run()
    } 
  for (i = 0; i < orbiters.length; i++) {//making it run
      orbiters[i].run()
    } 
}


function loadBalls(){
  for (let i = 0; i < 1; i++) {
    ball = new Ball(random(0, 200), random(0, 200), random(0,3), (random(0, 3)))
    balls.push(ball);
  }
}
    

function loadOrbiters(){
  for (let i = 0; i < 10; i++) {
    orbiter = new Orbiter(random(0, 200), random(0, 200), random(0, 5), (random(0, 5)), balls[0])
    orbiters.push(orbiter);
  }  
}
