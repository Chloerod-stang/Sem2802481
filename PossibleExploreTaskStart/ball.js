class Ball{
 constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy
    this.clr = color(random(255), random(255), random(255))
    }
  run() {
     this.checkEdges()
     this.update();
     this.render();
   }

 checkEdges() {
    if (this.x < 0 || this.x > 400) {
       this.dx = -this.dx;
     }
     if (this.y < 0 || this.y > 400) {
       this.dy = -this.dy;
     }
   }

   update() {
     this.x = this.x + this.dx;
     this.y = this.y + this.dy;
   }

  render() {
  fill(this.clr);
  rect(this.x, this.y, 50, 50);
   }
 }
