var canvas;
var music;
var rect
var rect2
var rect3
var rect4
var ball
var invisground1
var invisground2
var invisground3
var invisground4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

   rect=createSprite(60,550,200,30)
  rect.shapeColor=("orange")
  rect2=createSprite(270,550,200,30)
  rect2.shapeColor=("cyan")
  rect3=createSprite(480,550,200,30)
  rect3.shapeColor=("red")
  rect4=createSprite(690,550,200,30)
  rect4.shapeColor=("green")

  ball= createSprite(Math.round(random(20,750)),80,40,40)
  ball.shapeColor=rgb(1000,1000,1000)
  ball.velocityY=4
  ball.velocityX=4

  invisground1=createSprite(400,0,800,10)
  invisground1.visible=false;
  invisground2=createSprite(0,400,10,800)
  invisground2.visible=false;
  invisground3=createSprite(800,400,10,800)
  invisground3.visible=false;

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites()

    if(rect.isTouching(ball)&&(ball.bounceOff(rect))){
        ball.shapeColor=("cyan")
        music.play()
    }
    if(rect4.isTouching(ball)){
        ball.velocityX=0
        ball.velocityY=0
       
        music.stop()
    }
    if(rect2.isTouching(ball)&&(ball.bounceOff(rect2))){
        ball.shapeColor=("orange")
    }
    if(rect3.isTouching(ball)&&(ball.bounceOff(rect3))){
        ball.shapeColor=("green")
    }
    if(rect4.isTouching(ball)&&(ball.bounceOff(rect4))){
     ball.shapeColor=("red")
   }

    

    ball.bounceOff(invisground1)
    ball.bounceOff(invisground2)
    ball.bounceOff(invisground3)

 
    

    drawSprites()
   
}
