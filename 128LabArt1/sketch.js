//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins


boid = []

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadBoids(12);


}

//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5)
  for(var i = 0; i<boids.length; i++){
    boids[i].run();
  }
}boids = []

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
function draw() {
  background(220);
  if (this.id > -1){//not sure
  for (i = 0; i < boids.length; i++) {//making it run
    boids[i].run()
  }  
}

function loadBoids(n) {
  for(var i=0; i<n; i++){

    boid[i]= new Boid(random(width), random(height), random(-4, 4), random(-4, 4))
  }

}
