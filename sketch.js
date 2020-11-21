//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
function preload()
{
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10)
  foodStock=database.ref('food');
  foodStck.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(up_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
}
  drawSprites();
  //add styles here
textSize(50)
fill()
stroke()

function readStock(data){
  food=data.val();
}
function writeStcok(x){
  database.ref('/').update({
    Food:x})
  }
}




