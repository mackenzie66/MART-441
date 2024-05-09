// create two variables for textures 
let leo;
let french;
let fire;
let star;


// create a variable for the model
let skull;

let shapeArray = [];
// create two variables for the translation positions
var boxTranslationX = -300;
var boxTranslationY = 100;

// this function will ensure the assets are loaded prior to setup
function preload() {
  leo = loadImage('assets/trees.jpg');
  french = loadImage('assets/clouds.jpg');
  skull = loadModel('assets/Skull.obj', true);
  fire = loadImage('assets/fire.jpg');
  star = loadImage('assets/stars.jpg');
}

// create the canvas of 800 width by 600 height
function setup() {
  createCanvas(1200, 1000, WEBGL);

  // add two simple shapes to the simple shape array
  shapeArray.push(new shapeclass("box", 50, 50, 50, boxTranslationX, boxTranslationY, 0.2, 0.03, 1, star));

}

function draw() {

  background(300);
  normalMaterial();
  // this is required to make sure the custom shape will be textured
  image(leo);

  // display the simple shapes
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }

  // add a textured cone
  push();
  translate(-200, -200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(leo);
  cone(100, 70);
  pop();



  push();
  translate(-200, -200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(leo);
  cone(100, 200);
  pop();

  // add a textured ellipsoid
  //push();
  //translate(-250, 150);
 // rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //texture(leo);
  //ellipsoid(30, 40, 140);
  //pop();

  // add a textured torus
  push();
  translate(250, -150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(fire);
  torus(300, 15);
  pop();

 
  

  // add a texture model
  push();
  scale(2.0); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(french);
  model(skull);
  pop();

  // change the location of the box
  if (mouseIsPressed) {
    boxTranslationX = 0;
    boxTranslationY = 0;
    boxTranslationX = floor(random(600));
    boxTranslationY = floor(random(400));
  }
}