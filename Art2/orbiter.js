class Orbiter{
   constructor(x, y, dx, dy, ball) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy
    this.ball = ball
    this.clr = color(random(255), random(255), random(255))
  }
   run() {
    // this.checkBall();
    this.checkBounds()
    this.update();
    this.render();
  }

  checkBounds() {
    if (this.x < 0 || this.x > 500) {
      this.dx = -this.dx;
    } else {
      if (this.x - ball.x < 25) { // too close to ball
            this.dx = -this.dx;
          }      
    }
    if (this.y < 0 || this.y > 500) {
      this.dy = -this.dy;
    } else {
      if (this.y - ball.y < 25) { // too close to ball
      this.dy = -this.dy;
    }
    }
  }

//   checkBall() {
//     if (this.x - ball.x < 25) { // too close to ball
//       this.dx = -this.dx;
//     }
//    if (this.y - ball.y < 25) { // too close to ball
//       this.dy = -this.dy;
//     }   
//   }
  
  
  update() {
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }

  render() {
    fill(this.clr);
    line(this.x, this.y, 50, 50);
  }
}
