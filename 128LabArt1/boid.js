class Boid{
  constructor (x,y){
    this.loc=createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(0, 256), random(0, 256), random(0, 256));
//<<<<<<< HEAD
}

//=======
run(){
  this.update();
  this.checkEdges();
  this.render();
}
//<<<<<<< HEAD

update(){
  this.vel.add(this.acc)
  this.loc.add(this.vel)
}

// checkEdges(){
//   if(this.loc.x<0){
//     this.vel.x=-1*this.vel.x;
//     //left side of screen
//   }
//   if(this.loc.x>width){
//     this.vel.x = -1*this.vel.x;
//   }//right side of screen
//
//   if(this.loc.y<0){
//     this.vel.y=-1*this.vel.y
//   }
// }

render(){
  for(var i=0; i<boids.length; i++){
    let d = dist(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y)
//=======
 update()
  this.vel.add(this.acc)
  this.loc.add(this.vel)


  checkEdges()
    if(this.loc.x<0){
      this.vel.x=-1*this.vel.x;
} //left side of screen
    if(this.loc.x>width){
      this.vel.x = -1*this.vel.x;
} //right side of screen
    if(this.loc.x>height)
      this.loc.y = -1*this.vel.y;
} //top of screen
    if(this.loc.y>height){
      this.vel.y=-1*this.vel.y;
}

  // render()
  //   for(var i = 0; i<boids.length; i++)
  //     let d = dist(this.loc.x, this.loc.y, boid[i].loc.x, boids[i].loc.y)
  //     if(d < 200){
        //stroke(this.clr, 50)
        //line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y)
      }
    }
    //fill(255, 135, 255)
    //ellipse(this.loc.x, this.loc.y, 10, 10)
//>>>>>>> 44bac0aa6c6b6acc40e39634f766f2415c36edbe


//>>>>>>> 44bac0aa6c6b6acc40e39634f766f2415c36edbe
