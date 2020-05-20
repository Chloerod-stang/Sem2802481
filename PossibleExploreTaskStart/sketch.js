var ships = [];
var hals = [];
var planet;
var x = 3; //user entered number of balls page dialog
function setup() {
 var cnv = createCanvas(800, 800);
 cnv.position((windowWidth-width)/2, 30);
 background(5, 5, 5);
 fill(200, 30, 150);
 loadAll(x);
}
 
function loadAll(n){
 for(q=0;q<x;q++){
   planet = new Planet(100, 500, 50, 50, -1);
   ships[q] = new ship(random(800), random(800), random(-3, 3), random(-3, 3), q);
   hals[q] = new hal(random(800), random(800), random(-3, 3), random(-3, 3), q, ships[q]);
 }
}
 
 
function draw() {
 background(5, 5, 5, 60);
 for(var i = 0; i < ships.length; i++){
   ships[i].run();
 }
  for(var i = 0; i < hals.length; i++){
   hals[i].run();
 }
  
  planet.run();
  // hal.run();
  
}
 
function shipsDraw(){
 //background(5,5,5)//get trails back but just a little bit
if (this.id > -1){
 for(i=0;i<x;i++){
ships[i].run();
 }
  for(i=0;i<x;i++){
hals[i].run();
 }  
  
}
  
}
