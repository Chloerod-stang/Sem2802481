class Creep{
	constructor(){
		this.reset();
	}

	update(){
		this.size = noise(frameCount * 0.05, this.seed) * 3 + 0.1;

		colorMode(HSB, 1.0);
		var h = hue(this.color);
		this.color = color(h+0.0025, 0.5, 0.8)
		colorMode(RGB, 255);

		//this.dir += map(noise(this.seed + frameCount * this.scale), 0, 1, -this.rate, this.rate);
		this.dir = map(noise(this.x * 0.01, this.y * 0.01, this.seed), 0, 1, -TWO_PI, TWO_PI);

		this.x += cos(this.dir)*this.size*0.7;
		this.y += sin(this.dir)*this.size*0.7;
		var pix = get(this.x+width/2, this.y+height/2);
		var col = color(pix[0], pix[1], pix[2]);
		if(brightness(col) < 0.5){
			this.draw();
		}else{
			this.remove();
		}

		if(p5.Vector.dist(createVector(this.x, this.y), createVector(0,0)) > width*0.4) this.remove();

		if(random() < this.branch_rate) this.new();
	}

	draw(){
		push();
		translate(width/2,height/2)
		noStroke();
		fill(this.color);
		for(var i = 0; i < rotations; i++){
			rotate(TWO_PI / rotations);
			ellipse(this.x, this.y, this.size, this.size);
			ellipse(-this.x, this.y, this.size, this.size);
		}
		pop();
	}

	reset(){
			colorMode(HSB, 1.0);
			this.color = color(random(), 0.5, 0.8);
			colorMode(RGB, 255);
			this.seed = random(99999);
			var pos = p5.Vector.random2D().mult(random()*width*0.4);
			this.x = pos.x; //random(-width/3,width/3);
		  this.y = pos.y; //random(-height/3,height/3);
			this.dir = random(TWO_PI);
			this.scale = random(0.01, 0.1);
			this.rate = random(0.01, 0.1);
			this.branch_rate = random(0.01, 0.1);
	}

	remove(){
		var index = creeps.indexOf(this);
		if (index > -1) {
			creeps.splice(index, 1);
		}
	}

	new(){
		if(creeps.length < max_creeps){
			var creep = new Creep();
			creep.x = this.x;
			creep.y = this.y;
			creep.color = this.color;
			creeps.push(creep);
		}
	}
}
