//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var particles = [];
var viscosity;
var c;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	noStroke();

	c = color(62, 255, 255, 192);
	viscosity = 0.95;
}

function draw() {
	background(32);

	// makes the particles attract/repel each other
	handleInteractions();

	// moves each particle, then draws it
	for (var i = 0; i < particles.length; i++) {
		particles[i].move();
		particles[i].display();
	}
}
function handleInteractions(i, j) {
	for (var i = 0; i < particles.length; i++) {
	var accX = 0; var accY = 0;

		// particle interaction
		for (var j = 0; j < particles.length; j++) {
			if (i != j) {
				var x = particles[j].xPos - particles[i].xPos;
				var y = particles[j].yPos - particles[i].yPos;
				var dis = sqrt(x*x+y*y);
				if (dis < 1) dis = 1;

				var force = (dis-320)*particles[j].mass/dis;
				accX += force * x;
				accY += force * y;
			}

			// mouse interaction
			var x = mouseX - particles[i].xPos;
			var y = mouseY - particles[i].yPos;
			var dis = sqrt(x*x+y*y);

			// adds a dampening effect
			if (dis < 40) dis = 40;
			if (dis > 50) dis = 50;

			var force = (dis-50)/(5*dis);
			accX += force * x;
			accY += force * y;
		}
		particles[i].xVel = particles[i].xVel * viscosity + accX * particles[i].mass;
		particles[i].yVel = particles[i].yVel * viscosity + accY * particles[i].mass;
	}
}

function keyPressed() {
	// changes the colour if the C key was pressed
	if (keyCode === 67)	{
		c = color(random(100), random(200, 255), random(200, 255), 192);
	}

	// changes the viscosity if the V key was pressed
	if (keyCode === 86)	{
		if (viscosity >= 0.90) viscosity = random(0.30, 0.60);
		else if (viscosity < 0.60) viscosity = random(0.70, 0.80);
		else viscosity = random(0.90, 1.00);
	}

	if (keyCode === 82)	{
		particles = [];
	}
}

// creates a new particle
// function mousePressed() {
// 	particles.push(new Particle(mouseX, mouseY, c));
// }

// // creates a new particle
// function mouseDragged() {
// 	particles.push(new Particle(mouseX, mouseY, c));
// }
