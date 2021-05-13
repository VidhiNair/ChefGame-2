//variables
var blender, bread, egg, eggPack, femaleChef, flour, fridgeClose, fridgeOpen;
var bg, maleChef, milk, stove, toaster, stovetop, island2, floor, book, openBook;

var blenderImg, breadImg, eggImg, eggPackImg, femaleChefImg, flourImg, fridgeCloseImg, fridgeOpenImg;
var bgImg, maleChefImg, milkImg, stoveImg, toasterImg, stovetopImg, island2Img, bookImg, openBookImg;

//recipe 1 variables
var recipe= "recipe1";


function preload(){
    //Loading Images
    bgImg = loadImage("Images/Island.png")

    femaleChefImg = loadImage("Images/FemaleChef.png")
    maleChefImg = loadImage("Images/MaleChef.png")
    blenderImg = loadImage("Images/blender.png")
    breadImg = loadImage("Images/bread.png")
    eggImg = loadImage("Images/egg.png")
    eggPackImg = loadImage("Images/eggPack.png")
    flourImg = loadImage("Images/flour.png")
    fridgeCloseImg = loadImage("Images/FridgeClosed.png")
    fridgeOpenImg = loadImage("Images/fridgeOpen.png")
    milkImg = loadImage("Images/milk.png")
    stoveImg = loadImage("Images/stove.png")
    toasterImg = loadImage("Images/toaster.png")
    stovetopImg = loadImage("Images/stovetop.png")
    island2Img = loadImage("Images/island2.png")
    openBookImg = loadImage("Images/openbook.png")
    bookImg = loadImage("Images/book.png")


}

function setup(){
    createCanvas(windowWidth,windowHeight);

//Createing sprites and objects

     floor = createSprite(windowWidth-1000, windowHeight-50, 2000,500)
     floor.shapeColor = "black"
   
     bg = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
     bg.addImage(bgImg);
     bg.scale = 2.5;

     femaleChef = createSprite(windowWidth/2, windowHeight/2, 50, 80);
     femaleChef.addImage(femaleChefImg);

     //maleChef = createSprite(windowWidth/2, windowHeight/2, 50, 80);
    //maleChef.addImage(maleChefImg);


     blender = createSprite(windowWidth-800, windowHeight/2-60,50,50)
     blender.addImage(blenderImg)
     blender.scale = 0.2

     bread = createSprite(windowWidth-500, windowHeight/2-40, 50, 50)
     bread.addImage(breadImg)
     bread.scale = 0.5

     eggPack = createSprite(windowWidth-700, windowHeight/2-35, 50,50)
     eggPack.addImage(eggPackImg)
     eggPack.scale = 0.2

     flour = createSprite(windowWidth-1290, windowHeight/2-55, 50, 50)
     flour.addImage(flourImg)
     flour.scale = 0.3

     fridgeClose = createSprite(windowWidth-1600, windowHeight-500, 50, 50)
     fridgeClose.addImage(fridgeCloseImg)
     fridgeClose.scale = 1.5

     //fridgeOpen = createSprite(windowWidth-1800, windowHeight-500, 50, 50)
     //fridgeOpen.addImage(fridgeOpenImg)
     //fridgeOpen.scale = 3

     milk = createSprite(windowWidth-1110, windowHeight/2-60, 50, 50)
     milk.addImage(milkImg)
     milk.scale = 0.3

     toaster = createSprite(windowWidth-1195, windowHeight/2-60, 50, 50)
     toaster.addImage(toasterImg)
     toaster.scale = 0.5

     stove = createSprite(windowWidth-675, windowHeight/2+150, 50, 50)
     stove.addImage(stoveImg)
     stove.scale = 0.7


     stovetop = createSprite(windowWidth-1000, windowHeight/2+290, 350, 10)
     stovetop.addImage(stovetopImg)
     stovetop.scale = 4.5

     book = createSprite(windowWidth-200, windowHeight/2+290, 50, 30)
     book.addImage(bookImg)
     book.scale = 0.4

     openBook = createSprite(windowWidth/2-500, windowHeight/2, 70, 70)
     openBook.addImage(openBookImg);
     openBook.scale = 3
     openBook.visible = false


    
     }

function draw(){

    //Background colour
 background("lightblue");




 drawSprites();        
 

 if(mousePressedOver(book)){
     
     
    openBook.visible = true
    recipeNo1();
    

}
}
