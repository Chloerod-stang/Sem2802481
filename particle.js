class Particle{
  constructor(x,y, w, dx, dy){
    this.loc = createVector(x,y);
    this.w = w;
    this.vel = createVector(dx, dy);
    this.angle = random(TWO_PI)
    this.orbiters = [];
    
    // this.vel = createVector(dx,dy);
    // this.acc = createVector(0,.1);
  }
  run(){
    this.update()
    this.checkEdges()
    this.render()
  }

  update(){
    // this.vel.add(this.acc)
    // this.loc.add(this.vel)
  }

  checkEdges(){
    if (this.loc.x > width) {
      this.vel.x = -this.vel.x
    }

    if (this.loc.x < 0) {
      this.vel.x = -this.vel.x
    }

    if (this.loc.y > height) {
      this.vel.y = -this.vel.y
    }

    if (this.loc.y < 0) {
      this.vel.y = -this.vel.y
    }
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);

  }


}//++++++++++++++++++++++++++++++++++++++ end ball class





}
