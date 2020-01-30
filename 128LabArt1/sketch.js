//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
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
}

function loadBoids(n) {
  for(var i=0; i<n; i++){
    boids[i]= new Boid(random(width))
  }
}
