class Snake{
  constructor (x,y,w){
    this.segments = []
    this.loc=createVector(x,y);
    this.vel = createVector(0,0);
    this.w = snakeWidth;
    //this.size=size
    this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.update();
    this.render();
    this.checkEdges();
  }

//  render(){
//    fill(200,0,150)
  //  rect(this.loc.x*this.w, this.loc.y*this.h, this.w, this.h)

  update(){

    if(this.segments.length > 0){
      this.segments[0].x = this.loc.x;
      this.segments[0].y = this.loc.y;
      for (var i = this.segments.length-1; i > 0; i--){
            this.segments[i].x = this.segments[i-1].x
            this.segments[i].y = this.segments[i-1].y
          }
    }

    this.loc.add(this.vel)
  }

grow(){
  this.segments.push(createVector(0,0));
}

render(){
  fill(200, 220, 20);
  rect(this.loc.x, this.loc.y, this.w, this.w);
  for(var i = 0; i< this.segments.length; i++){
    rect(this.segments[i].x, this.segments[i].y, this.w, this.w);
  }
}
  checkEdges(){
    if(this.loc.x > 800  &&
      this.loc.x< 0  &&
      this.loc.y> 800  &&
      this.loc.y< 0){
        gameState = 3
      }
  }

  }//end of snake class
