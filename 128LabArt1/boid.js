class Boid {
  // this.loc //  init in constructor
  // this.vel //  init in constructor
  // this.acc //  init in constructor
  // this.clr //  this is the color of your boid
  // this.orbiters = [] //  add three orbiter object
  constructor(x, y, dx, dy) {
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0);
    this.clr = color(random(0, 256), random(0, 256), random(0, 256));
    this.orbiters = []
    this.loadOrbiters()
  }

  
  loadOrbiters(){
    for (let i = 0; i < 3; i++) {
      var orbiter = new Orbiter(random(0, 200), random(0, 200), random(0, 10), (random(0, 10)))
      orbiter.run()
      this.orbiters.push(orbiter);
    }
  }
  
  run() {
    this.update();
    this.checkEdges();
    this.render();
  }

  // Add acc to vel and vel to loc
  // limit the speed
  update() {
    this.vel.limit(2);
    this.vel.add(this.acc)
    this.loc.add(this.vel)
  }

  // Either warp or bounce
  checkEdges() {
    if (this.loc.x < 0) {
      this.vel.x = -1 * this.vel.x;
    } //left side of screen
    if (this.loc.x > width) {
      this.vel.x = -1 * this.vel.x;
    } //right side of screen
    if (this.loc.x > height) {
      this.loc.y = -1 * this.vel.y;
    } //top of screen
    if (this.loc.y > height) {
      this.vel.y = -1 * this.vel.y;
    }
}

// This method will draw a line between its location and the location of any other boid object within 200px. //  no ellipse
render() {
  // for(let i = 0; i<boids.length; i++){
  //   let d = dist(this.loc.x, this.loc.y, 
  //                boids[i].loc.x,   boids[i].loc.y)
  // }
}
  
}
