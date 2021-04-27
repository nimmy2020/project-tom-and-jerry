var cat, catImage,catImage2;
var jerry,jerryImage,jerryImage2;


function preload() {

 bg = loadImage("images/garden.png");
 catImage = loadImage("images/cat1.png");
 jerryImage = loadImage("images/mouse1.png");
jerryImage2 = loadImage("images/mouse4.png");
catImage2 = loadAnimation("images/cat2.png","images/cat3.png");

}

function setup(){
    createCanvas(1000,700);

    cat = createSprite(850,640,10,10);
    cat.addImage("cat",catImage);
    cat.scale = 0.1;

    jerry = createSprite(100,630,10,10);
    jerry.addAnimation("jerry",jerryImage);
    jerry.scale = 0.1;
    
    

}

function draw() {

    background(bg);

    if (cat.x-jerry.x<(cat.width-jerry.width/2)) {
        cat.velocityX = 0;
        jerry.changeAnimation("jerry",jerryImage2);
        }
    

    drawSprites();

   

}


function keyPressed(){

if (keyCode === LEFT_ARROW) {
    cat.addAnimation("cat",catImage2);
    cat.frameDelay = 25;
    cat.velocityX = -6;
   
}  


}
