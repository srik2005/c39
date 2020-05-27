var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var ic1,ic2,ic3,ic4,track,groundimg;


function preload(){
ic1 = loadImage("images/car1.png")
ic2 = loadImage("images/car2.png")
ic3 = loadImage("images/car3.png")
ic4 = loadImage("images/car4.png")
track = loadImage("images/track.jpg")
groundimg = loadImage("images/ground.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
