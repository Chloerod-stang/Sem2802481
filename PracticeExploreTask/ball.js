class Ball{
  constructor(x, y){

    this.x = x;
    this.y = y;
    this.dx = random (3,6)
    this.dy = random (3, 6)
    this.clr= color(100,0,0)
  }

  run(){
    this.update();
    this.render();
    this.checkEdges();
  }
  update() {
    //this.x = x + dx
    this.y = this.y + this.dy
    
}

  render(){
    fill(this.clr)
    ellipse (this.x, this.y, 30, 30)
}
  checkEdges(){
    if(this.y> 500)
      this.y= 0
     // this.x=random(0,500)
  }
}
