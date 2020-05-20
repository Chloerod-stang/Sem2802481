class hal {
   constructor(x, y, dx, dy, id, ship) {
     this.clr = color(random(255), random(255), random(255));
     this.loc = createVector(x, y);
     this.vel = createVector(dx, dy);
     this.id = id;
     this.ship = ship;
     this.acc = createVector(0, .1);
      this.run = function () {
       this.checkEdges();
       this.update();
       this.render();
     }
      this.checkEdges = function () {
       if (this.loc.x < 0) {
         this.loc.x = 800; //left
       }
       if (this.loc.x > width) { //right
         this.loc.x = 0;
       }
       if (this.loc.y < 0) { //down
         this.loc.y = 800;
       }
       if (this.loc.y > height) { //up
         this.loc.y = 0;
       }
     }
     this.update = function () {
       if (id > -1) {
         var dist = this.loc.dist(this.ship.loc);
         if (dist > 11&&dist < 350) {
           this.Force = p5.Vector.sub(this.ship.loc, this.loc);//attract
           this.Force.normalize();
           this.Force.mult(0.6);
           this.vel.add(this.Force);
           this.vel.add(this.acc);
         }
         this.loc.add(this.vel); //add velocity to make gravity
       }
         this.vel.limit(2);
        this.loc.add(this.vel);
     }
     this.render = function () {
     fill(this.clr);
     push();//changes dont matter
     let myHeading = this.vel.heading();//
     translate(this.loc.x, this.loc.y)//for orgin
     rotate(myHeading, 0);//rotate hopefully to where it is pointing
     triangle(-5, 20, -15, -10, 20, 0);//make perfet triangle
     pop();//things matter again
   }
 }
}
