/*var PLAY = 1;
var END = 0;
var gameState = PLAY;*/
var n,nImg;
var king,kImg;

var jungle, invisiblejungle;


//var obstaclesGroup, obstacle1, obstacle2, obstacle3;

//var score=0;

//var gameOver, restart;



function preload(){
 

 // groundImage = loadImage("bg2.png");
  nImg= loadAnimation("ninja.png","ninja.png","ninja.png","ninja2.png","ninja2.png","ninja2.png");
  jungleImage = loadImage("bg1.png");
  kImg=loadImage("king.png")
  /*obstacle1 = loadImage("black-stone.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");*/

  //gameOverImg = loadImage("game-over.png");
 // restartImg = loadImage("restart..png");
}

function setup() {
 createCanvas(900,350);
 jungle = createSprite(300,100,800,400);
  jungle.addImage("jungle",jungleImage);
  jungle.scale=2
 n= createSprite(150,height-50,50,50);
 n.addAnimation("running",nImg);
 n.scale=0.2
 
 king= createSprite(90,height-50,50,50);
 king.addImage("running",kImg);
 king.scale=0.2
 invisibleGround = createSprite(400,350,1600,10);
 invisibleGround.visible = false;
 // ground = createSprite(200,180,400,20);
 // ground.addImage("ground",groundImage);
 
 // gameOver = createSprite(300,100);
 // gameOver.addImage(gameOverImg);
  
 // restart = createSprite(300,140);
 // restart.addImage(restartImg);
  
//  gameOver.scale = 0.6;
  //restart.scale = 0.6;

 // gameOver.visible = false;
 // restart.visible = false;
  
  //invisibleGround = createSprite(200,190,400,10);
 // invisibleGround.visible = false;
  
 // obstaclesGroup = new Group();
  
 // score = 0;
}

function draw(){

  background(0);
  jungle.velocityX=-0.4;
  if(jungle.x<250)
    {
       jungle.x=400
    }
   // bg.velocityX=-3

    //if(bg.x<100)
    //{
     //  bg.x=400
    //}

    drawSprites();
}
 

   

