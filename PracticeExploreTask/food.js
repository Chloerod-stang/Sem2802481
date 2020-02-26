class Food{
  constructor(x,y,w, id){
    this.loc = createVector(x,y);
    this.w=w;
    this.clr=color(0,255,0);
    this.id=id;
  }
  run(){
    this.render();
    this.update();

  }

  render(){
    fill(this.clr);
    react(this.loc.x*this.w,this.loc.y*this.w, this.w, this.w)
  }

  update(){

    if(snake.segments.length > 0){
      if(snake.segments[0].x === this.loc.x &&
         snake.segments[0].y === this.loc.y) {
          this.loc.x = Math.floor(random(0, 39));
          this.loc.y = Math.floor(random(0,39));
          snake.segments.push(createVector(0,0));
        }

    }

    }

    render(){
      fill(255);
      rect(this.loc.x, this.loc.y, snakeWidth, snakeWidth)
    }


    isEaten(){
      if (this.loc.x === snake.loc.x && this.loc.y === snake.loc.y){
        return true
      } else {
        return false
      }
      if (this.loc.head === this.loc.food){
        return true
      } else {
        return false
      }
      //if the head and the food are in the same spot, return true, else return false
    }


  }

  //++++++++++++++++++++end of food class
