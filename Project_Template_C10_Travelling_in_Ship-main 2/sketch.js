var ship

var sea
function preload(){

}

function setup(){
  createCanvas(400,400)
}

function draw() {
  background("blue");
  
  drawSprite()
  ship=createSrite(30,20,20,15)

  ship.setAnimation(running,'ship-4.png')

  sea=createSprite(20,10,100,20)

  sea.velocityX=-2
  
  if(sea.x<0){  
  sea.x=sea.width/2}

}







