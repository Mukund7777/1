var hunter,enemy1,enemy2;
var hunterI,hunter2I,hunter3I,hunter4I,enemyI,enemy2I,bgI;
var diamonds,dlogo;
var diamondsI,dlogoI;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21;
var steps,kill,collect,soundCount=0;

function preload(){
    hunterI=loadImage("img/assassin.png");
    hunter2I=loadImage("img/assassin2.png");
    hunter3I=loadImage("img/assassin3.png");
    hunter4I=loadImage("img/assassin4.png")
    bgI=loadImage("img/0.jpg");
    steps=loadSound("sounds/walk.mp3");
}

function setup(){
    createCanvas(displayWidth-50,displayHeight+500);

    if(soundCount===1){
        setInterval(steps.play(),1000);
    }

    hunter = createSprite(displayWidth/2,200);
    hunter.addImage(hunter2I);
    hunter.scale=0.3;

    wall1 = createSprite(displayWidth/2-135,displayHeight/2-235,850,50);
    wall1.visible = false;
    wall1.debug = true;

    wall2 = createSprite(displayWidth/2+75,displayHeight/2-300,425,50);
    wall2.visible = false;
    wall2.debug = true;

    wall3 = createSprite(displayWidth/2-280,displayHeight/2-170,555,60);
    wall3.visible = false;
    wall3.debug = true;

    wall4 = createSprite(displayWidth/2+615,displayHeight/2+225,40,2000);
    wall4.visible = false;
    wall4.debug = true;

    wall5 = createSprite(displayWidth/2+375,displayHeight/2+80,120,120);
    wall5.visible = false;
    wall5.debug = true;

    wall6 = createSprite(displayWidth/2+525,displayHeight/2-50,150,400);
    wall6.visible = false;
    wall6.debug = true;

    wall7 = createSprite(displayWidth/2+10,displayHeight/2+10,275,125);
    wall7.visible = false;
    wall7.debug = true;

    wall8 = createSprite(displayWidth/2-500,displayHeight/2-20,110,65);
    wall8.visible = false;
    wall8.debug = true;

    wall9 = createSprite(displayWidth/2-565,displayHeight/2+55,250,50);
    wall9.visible = false;
    wall9.debug = true;

    wall10 = createSprite(displayWidth/2+530,displayHeight/2+290,125,125);
    wall10.visible = false;
    wall10.debug = true;

    wall11 = createSprite(displayWidth/2+10,displayHeight/2+290,275,125);
    wall11.visible = false;
    wall11.debug = true;

    wall12 = createSprite(displayWidth/2-425,displayHeight/2+220,275,125);
    wall12.visible = false;
    wall12.debug = true;

    wall13 = createSprite(displayWidth/2-580,displayHeight/2+285,275,125);
    wall13.visible = false;
    wall13.debug = true;

    wall14 = createSprite(displayWidth/2-580,displayHeight/2+570,275,125);
    wall14.visible = false;
    wall14.debug = true;

    wall15 = createSprite(displayWidth/2-425,displayHeight/2+780,275,125);
    wall15.visible = false;
    wall15.debug = true;

    wall16 = createSprite(displayWidth/2-580,displayHeight/2+855,275,125);
    wall16.visible = false;
    wall16.debug = true;

    wall17 = createSprite(displayWidth/2+10,displayHeight/2+575,275,125);
    wall17.visible = false;
    wall17.debug = true;

    wall18 = createSprite(displayWidth/2+10,displayHeight/2+850,275,125);
    wall18.visible = false;
    wall18.debug = true;

    wall19 = createSprite(displayWidth/2+530,displayHeight/2+855,125,125);
    wall19.visible = false;
    wall19.debug = true;

    wall20 = createSprite(displayWidth/2+470,displayHeight/2+600,325,205);
    wall20.visible = false;
    wall20.debug = true;

    wall21 = createSprite(displayWidth/2-140,displayHeight/2+535,270,200);
    wall21.visible = false;
    wall21.debug = true;
}

function draw(){
    background(bgI);
    if(keyDown(UP_ARROW)){
        hunter.y-=10;
        hunter.addImage(hunter2I);
        soundCount=1;
    }else
    if(keyDown(DOWN_ARROW)){
        hunter.y+=10;
        hunter.addImage(hunter3I);
        //steps.play()
    }else
    if(keyDown(RIGHT_ARROW)){
        hunter.x+=10;
        hunter.addImage(hunterI);
        //soundCount=1;
    }else
    if(keyDown(LEFT_ARROW)){
        hunter.x-=10;
        hunter.addImage(hunter4I);
        //steps.play()
    }else{
        steps.pause()
        soundCount=0;
    }

    hunter.collide(wall1);
    hunter.collide(wall2);
    hunter.collide(wall3);
    hunter.collide(wall4);
    hunter.collide(wall5);
    hunter.collide(wall6);
    hunter.collide(wall7);
    hunter.collide(wall8);
    hunter.collide(wall9);
    hunter.collide(wall10);
    hunter.collide(wall11);
    hunter.collide(wall12);
    hunter.collide(wall13);
    hunter.collide(wall14);
    hunter.collide(wall15);
    hunter.collide(wall16);
    hunter.collide(wall17);
    hunter.collide(wall18);
    hunter.collide(wall19);
    hunter.collide(wall20);
    hunter.collide(wall21);

    edges=createEdgeSprites();
    hunter.collide(edges[0]);
    hunter.collide(edges[1]);
    hunter.collide(edges[2]);
    hunter.collide(edges[3]);

    drawSprites();
}

