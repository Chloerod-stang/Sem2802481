//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var particles = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadParticles(5)

}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  for(var i = 0; i < particles.length; i++) {
    particles[i].run()
  }
}


function loadParticles(n){
  for(var i = 0; i < 10; i++)
  particles[i] = new Particle(random(width), random(height), random(-3,3), random(-3,3))
}
