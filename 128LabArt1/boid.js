class Boid{
  constructor (x,y){
    this.loc=createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(0, 256), random(0, 256), random(0, 256));
}

run(){
  this.update();
  this.checkEdges();
  this.render();
}

update(){
  this.vel.add(this.acc)
  this.locc.add(this.vel)
}

checkEdges(){
  if(this.loc.x<0){
    this.vel.x=-1*this.vel.x;
    //left side of screen
  }
  if(this.loc.x>width){
    this.vel.x = -1*this.vel.x;
  }//right side of screen

  if(this.loc.y<0){
    this.vel.y=-1*this.vel.y
  }
}

render(){
  for(var i=0; i<boids.length; i++){
    let d = dist(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y)
  }
}
