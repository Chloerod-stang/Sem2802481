class Particle{
  constructor(){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy
    this.clr = color(random(255), random(255), random(255))

  }

  Particle(x, y, c) {
  	this.xPos = x; this.yPos = y;
  	this.xVel = 0; this.yVel = 0;
  	this.mass = random(0.003, 0.03);
  	this.colour = c;

  	// moves the particle
  	this.move = function() {
  		this.xPos += this.xVel;
  		this.yPos += this.yVel;
  	}

  	// displays the particle
  	this.display = function() {
  		fill(this.colour)
  		ellipse(this.xPos, this.yPos, this.mass*1000, this.mass*1000)
  	}
  }
}//++++++++++++++++++++++++++++End of class
