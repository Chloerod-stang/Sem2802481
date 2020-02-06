//  Chloe Rodriguez Stangle
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var max_creeps = 30;

var creeps = [];
var rotations;

var paused = false;

function setup() {
	createCanvas(windowHeight - 100, windowHeight - 100);
	background(20);

	rotations = round(random(2,12))

	for(var i = 0; i < 3; i++){
		creeps[i] = new Creep();
	}

	colorMode(RGB, 255);
	fill(25);
	noStroke();
	rect(0, 0, width, height);
	noFill();
	stroke(50);
	strokeWeight(3);
	ellipse(width/2, height/2, width*0.805, height*0.805);
}

function draw() {
	if(!paused){
		for(var i = 0; i < creeps.length; i++){
			creeps[i].update();
		}

		if(creeps.length == 0){
			creeps.push(new Creep());
		}

		resetMatrix();
		colorMode(RGB, 255);
		blendMode(BLEND);
		noFill();
		stroke(20);
		strokeWeight(40);
		rect(-10, -10, width+20, height+20, 80);
	}
}

function mouseClicked() {
	var creep = new Creep();
	creep.x = mouseX-width/2;
	creep.y = mouseY-height/2;
  creeps.push(creep);
}

function keyPressed() {
  if (keyCode == 32) {

    rotations = round(random(2,12))
		creeps = []
		colorMode(RGB, 255);
		fill(25);
		noStroke();
		rect(0, 0, width, height);
		noFill();
		stroke(50);
		strokeWeight(3);
		ellipse(width/2, height/2, width*0.805, height*0.805);
		paused = false;
  }
	if(keyCode == 80){
		paused = !paused;
	}
	if(keyCode == 70){
		var pic = get();
		pic.filter(BLUR);
		pic.filter(POSTERIZE);
		image(pic, 0, 0);
	}
}
