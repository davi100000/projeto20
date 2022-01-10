var bgImg;
var catimg1, mouseimg1, catimg2, mouseimg2, cat, mouse, catimg3;

function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("images/garden.png");
    catimg1 = loadImage("images/cat1.png");
    mouseimg1 = loadImage("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catimg3 = loadAnimation("images/cat4.png")
    mouseimg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui

    cat = createSprite(870, 600);
    cat.addAnimation ("gatoSentado", catimg1);
    cat.scale = 0.2;

    mouse = createSprite(400, 600);
    mouse.addAnimation ("ratoParado", mouseimg1);
    mouse.scale = 0.2

}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
      cat.velocityX=0;
      cat.addAnimation("últimaImagemGato", catimg3);
      cat.changeAnimation("últimaImagemGato") ;
      cat.x =300;
      cat.scale =0.2; 
      mouse.addAnimation("últimaImagemRato", mouseimg3);
      mouse.changeAnimation("últimaImagemRato") ;
      mouse.scale =0.2;  
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if(keyCode === LEFT_ARROW)
  mouse.addAnimation("ratoProvocando", mouseimg2);
  mouse.changeAnimation("ratoProvocando");
 // mouse.frameDelay = 25;

  cat.velocityX = -5;

  cat.addAnimation("gatoCorrendo", catimg2);
  cat.changeAnimation("gatoCorrendo");
}
