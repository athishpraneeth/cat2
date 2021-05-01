var cat,catwalk,catI;
var mouse,mousedance,mouseI;
var background,backgroundI;


function preload() {

    catwalk = loadAnimation("cat2.png","cat3.png")
    mousedance = loadAnimation("mouse2.png","mouse3.png","mouse4.png")
    mouseI = loadImage("mouse1.png")
    catI = loadImage("cat4.png")
    backgroundI = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

background = createSprite(500,400,10,10)
background.addImage(backgroundI)

cat = createSprite(800,630,10,10);

cat.scale = 0.2;

mouse = createSprite(200,630,10,10);
mouse.addImage(mouseI);
mouse.scale = 0.1;
cat.debug = false;
cat.setCollider("rectangle",10,10,800,500)

}

function draw() {

    cat.velocityX = 0
    
    cat.addImage(catI);

    if(cat.isTouching(mouse)){

mouse.addAnimation("mousedance",mousedance);
mouse.changeAnimation("mousedance")
    }

   keyPressed()
    
    drawSprites();
}


function keyPressed(){

  if(keyDown("LEFT_ARROW")){
      cat.velocityX = -2
      cat.addAnimation("walk",catwalk)
      cat.changeAnimation("walk")
  }


}
