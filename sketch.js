var canvas;
var music;
var box;
var edges;
var surface1,surface2,surface3,surface4;

function preload(){
   
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(850,600);

    //create 4 different surfaces

    surface1 = createSprite(745,500,200,50);
    surface1.shapeColor = "red";
    surface2 = createSprite(535,500,200,50);
    surface2.shapeColor = "blue";
    surface3 = createSprite(320,500,200,50);
    surface3.shapeColor = "green";
    surface4 = createSprite(105,500,200,50);
    surface4.shapeColor = "yellow";

    //create box sprite and give velocity
    
    box = createSprite(random(20,750),100,50,50);
    box.shapeColor = "white";
    box .velocityY = 10;
    box.velocityX = 4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
      edges = createEdgeSprites();
     box.bounceOff(edges);

    drawSprites();  
    //add condition to check if box touching surface and make it box

    if (box.isTouching(surface1)) {
        box.bounceOff(surface1)
        box.shapeColor = "red";
    }
    if (box.isTouching(surface2)) {
        box.bounceOff(surface2);
        box.shapeColor = "blue";
    }
    if (box.isTouching(surface3)) {
        box.bounceOff(surface3);
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if (box.isTouching(surface4)) {
        box.bounceOff(surface4);
        box.shapeColor = "yellow";
        music.play();
    }

}