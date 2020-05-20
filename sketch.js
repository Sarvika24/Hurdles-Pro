var unicorn ;
var trains = [];





function setup() {
  createCanvas(500, 500 );
  unicorn = new Unicorn(); 
}






function createTrain(){
    if (frameCount % 100 == 0){
      var train = createSprite(480 , 450 , 30 , random(100,500)) ; 
      train.velocityX = -10; 
train.shapeColor = "white"

    }
}





function drawSprites()
{}

function createSprite()
{}

function keyPressed(){

  if(key == ' '){
  
  unicorn.jump();
  
  }

}

function draw() {
  background(0);
  unicorn.show();
  unicorn.move();
  drawSprites();   
  createTrain();

}