var gameState="start"
var getStarted,start_image,tought,tought_image;
var quiz,quiz_image,ye1,yesImage,no1,noImage,yes2,no2,yes3,no3,yes4,no4,yes5,no5;
var count=0 , score=0,display,display_image
var image1,image1_img,image2,image2_img,image3,image3_img;
var image4,image4_img,image5,image5_img;
var display1,display_image1,prevent,prevent_image,chat,chat_image,input1,input2
var database, chatofperson1, chatofperson2,message,message2
var advice,advice_image
function preload(){
  start_image=loadImage("getstarted.png");
  tought_image=loadImage("tought1.png");
  quiz_image=loadImage("quiz.png");
  yesImage=loadImage("yes.png")
  noImage=loadImage("no.png");
  display_image=loadImage("display.png")
image1_img=loadImage("image1.png")
image2_img=loadImage("image2.png")
image3_img=loadImage("image3.png")
image4_img=loadImage("image4.png")
image5_img=loadImage("image5.png")
display_image1=loadImage("roseimage.png")
prevent_image=loadImage("prevent1.png");
chat_image=loadImage("chat.png");
advice_image=loadImage("advice.png")

}

function setup() {
  database=firebase.database();
  createCanvas(displayWidth-20,displayHeight-80);
tought=createSprite(displayWidth/2,displayHeight/2,1,1)

 getStarted= createSprite(displayWidth/1-400,displayHeight/2+200,1,1);
  quiz=createSprite(displayWidth/2-70,450,1,1);


image1=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
yes1=createSprite(displayWidth/2-170,displayHeight/2+40,1,1)
no1=createSprite(displayWidth/2+150,displayHeight/2+40,1,1)
  
 image2=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes2=createSprite(displayWidth/2-50,displayHeight/2+40,1,1)
  no2=createSprite(displayWidth/2+50,displayHeight/2+40,1,1)

image3=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes3=createSprite(displayWidth/2-150,displayHeight/2+40,1,1)
  no3=createSprite(displayWidth/2+150,displayHeight/2+40,1,1)

image4=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes4=createSprite(displayWidth/2-50,displayHeight/2+40,1,1)
  no4=createSprite(displayWidth/2+50,displayHeight/2+40,1,1)


  image5=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes5=createSprite(displayWidth/2-150,displayHeight/2+40,1,1)
  no5=createSprite(displayWidth/2+150,displayHeight/2+40,1,1)

  prevent=createSprite(displayWidth/2-200,displayHeight/2-70,1,1)
 chat=createSprite(displayWidth/1-400,displayHeight/2+200,1,1)

 input1=createInput()
 input2=createInput()


}

function draw() {
  background(222); 
  if(gameState==="start"){
    getStarted.addImage(start_image);
    tought.addImage(tought_image)
    if(mousePressedOver(getStarted)){
      gameState="screen1"
    }
  }
  if(gameState==="screen1"){
    getStarted.destroy();
    tought.destroy();
   
    quiz.addImage(quiz_image);
    quiz.scale=0.3
    background(display_image1);
   
    textSize(50)
    text("Lets have a quiz",200,200)
    text("Clik here:",300,300)
    if(mousePressedOver(quiz)){
      gameState="quiz"
    }

  }
  if(gameState==="quiz"){
    quiz.destroy();
    background(display_image);
    textSize(20);
    
    image1.addImage(image1_img)
    yes1.addImage(yesImage)
    yes1.scale=0.05
    no1.addImage(noImage)
    no1.scale=0.3

    if(mousePressedOver(yes1)){
      yes1.destroy();
      no1.destroy();
      image1.destroy();
      image2.addImage(image2_img)
      yes2.addImage(yesImage)
      yes2.scale=0.05
      no2.addImage(noImage)
      no2.scale=0.3
     // string="a"
      
     
        count=count+1
        console.log(count);
      
      
    }
    if(mousePressedOver(no1)){
      yes1.destroy();
      no1.destroy();
      image1.destroy();
      image2.addImage(image2_img)
      yes2.addImage(yesImage)
      yes2.scale=0.05
      no2.addImage(noImage)
      no2.scale=0.3
      score=score+1
      console.log(score)
    }
    if(mousePressedOver(yes2)){
      yes2.destroy();
      no2.destroy();
      image2.destroy();
      image3.addImage(image3_img)
      yes3.addImage(yesImage)
      yes3.scale=0.05
      no3.addImage(noImage)
      no3.scale=0.3
    //  string="b"
      
        count=count+1
        console.log(count);
      
     
    }
  
    if(mousePressedOver(no2)){
      yes2.destroy();
      no2.destroy();
      image2.destroy();
      image3.addImage(image3_img)
      yes3.addImage(yesImage)
      yes3.scale=0.05
      no3.addImage(noImage)
      no3.scale=0.3
      score=score+1
      console.log(score)
    }
    if(mousePressedOver(yes3)){
      yes3.destroy();
      no3.destroy();
      image3.destroy();
      image4.addImage(image4_img)
      yes4.addImage(yesImage)
      yes4.scale=0.05
      no4.addImage(noImage)
      no4.scale=0.3
     
     
        count=count+1
        console.log(count);
      
     
    }
    if(mousePressedOver(no3)){
      yes3.destroy();
      no3.destroy();
      image3.destroy();
      image4.addImage(image4_img)
      yes4.addImage(yesImage)
      yes4.scale=0.05
      no4.addImage(noImage)
      no4.scale=0.3
      score=score+1
      console.log(score)
    }

    if(mousePressedOver(yes4)){
      yes4.destroy();
      no4.destroy();
      image4.destroy();
      image5.addImage(image5_img)
      yes5.addImage(yesImage)
      yes5.scale=0.05
      no5.addImage(noImage)
      no5.scale=0.3
      
     
        count=count+1
        console.log(count);
      
     
    }

    if(mousePressedOver(no4)){
      yes4.destroy();
      no4.destroy();
      image4.destroy();
      image5.addImage(image5_img);
      yes5.addImage(yesImage);
      yes5.scale=0.05;
      no5.addImage(noImage);
      no5.scale=0.3;
      score=score+1;
      console.log(score);
    }
    if(mousePressedOver(yes5)){
      yes5.destroy();
      no5.destroy();
      image5.destroy();
     
     
        count=count+1;
        console.log(count);
     
      }
      if(count>=25&&score<=40){
        background(0)
        gameState="tips1"
        
    }

    if(mousePressedOver(no5)){
      yes5.destroy();
      no5.destroy();
      image5.destroy();
      score=score+1
      console.log(score)
     
     
    }
    if(score>=40&&count<=30){
      background(0)
      gameState="tips2"
    }

  }
  if(gameState==="tips2"){
    text("save life",400,400)
    yes4.destroy();
no4.destroy();
image4.destroy();
    yes5.destroy();
no5.destroy();
image5.destroy();
  }
if(gameState==="tips1"){
prevent.addImage(prevent_image);
prevent.scale=1.5
chat.addImage(chat_image);
chat.scale=0.6
yes5.destroy();
no5.destroy();
yes4.destroy();
no4.destroy();
image4.destroy();
image5.destroy();
if(mousePressedOver(chat)){
  prevent.destroy()
  chat.destroy()
  yes5.destroy();
  no5.destroy();
  yes4.destroy();
  no4.destroy();
  image4.destroy();
  image5.destroy();
  gameState="chat"
}
}
if(gameState==="chat"){
  background("#22EE11")
input1.position(200,100)
input2.position(1000,500)
message=input1.value()
textSize(30)
fill("red")
text("person1:"+chatofperson1,500,100)
message2=input2.value()

fill("blue")
text("person2:"+chatofperson2,550,200)
getchat1()
getchat2()
//chat1=chatofperson1
//chat2=chatofperson2
updateChat(message)
updateChat2(message2)
}
    
  
  drawSprites();
  
}
function getchat1(){
database.ref('person1/chat').on("value",(data)=>{
  chatofperson1=data.val()
})
}

  function getchat2(){
  database.ref('person2/chat').on("value",(data)=>{
    chatofperson2=data.val()
  })
  }

  function updateChat(message){
    database.ref('person1').set({
      chat:message
    })
  }

  function updateChat2(message2){
    database.ref('person2').set({
      chat:message2
    })
  }

