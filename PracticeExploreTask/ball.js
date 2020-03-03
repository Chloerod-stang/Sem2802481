class Ball{
  constructor(x, y){

    this.x = x;
    this.y = y;
    this.dx = random (-3,5)
    this.dy = random (-3, 5)
    this.clr= color(100,0,0)
  }


move() {
  this.x = x + dx
  this.y = y + dy
  fill(this.clr)
  ellipse (x, y, 30, 30)


}

}
