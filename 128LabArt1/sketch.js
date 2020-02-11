//  Chloe Rodriguez Stangle
// 	1/31/20
//  This is a comment
//  The setup function function is called once when your program begins


boids = []

// Create a canvas and place it in the center of the screen
// Call function "loadBoids()" to load an array of boids (create a method for this purpose)
function setup() {
  createCanvas(400, 400);
  loadBoids();
}

function loadBoids(){
  for (let i = 0; i < 10; i++) {
    boid = new Boid(random(0, 200), random(0, 200), random(0, 10), (random(0, 10)))
    boids.push(boid);
  }
}

// Run all the boids in the global Array of Boids
function draw(){
  // background(220);
    for (i = 0; i < boids.length; i++) {//making it run
      boids[i].run()
    }  
}
