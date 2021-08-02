//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
function preload()
{
	//load images here
  dog.Image=loadImage(doglmg.png)
  happyDog.Image=loadImage(doglmg1.png)
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.Image=addImage("dog");
  database=firebase.database() ;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
  if( keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  //add styles here
 function readStock(data){
 foodS=data.val()
 }
 function writeStock(x){
   database.ref('/').update({
     Food:x
   })
 }
}



