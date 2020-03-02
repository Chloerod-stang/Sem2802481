class Ball{
  constructor(x,y){

  }




  run(){

  }



  render(){

  }

  update(){
    
  }
setup() {
  x = 100;
  y = 200;
  speedX = random (-3,5)
  speedY = random (-3, 5)
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
draw() {
  x = x + speedX
  y = y + speedY
fill(250,20,20)
ellipse (x, y, 30, 30)
}

}
