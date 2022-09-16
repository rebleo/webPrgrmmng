console.log("the Message!");


let theVariable = "rebecca"
// in js you can concatenate number and string data

console.log(3 + " " +theVariable);
// p5 is built on top of the HTML5 canvas api
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// in p5, setup + draw are looped functions
// setup runs once
// draw defaults to 60 frames per second < ------
let theArray = ["red","green","blue"]
function setup(){
    console.log("p5.js!")
    createCanvas(windowWidth, windowHeight);

   
}

function draw(){
    background(200);
    noLoop()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    let theX = random(width);
    let theY = random(height);
    let theDiameter = random(10,100);
    // rgba()
    let theRed = random(255);
    let theGreen = random(255);
    let theBlue = random(255)
    let theAlpha = random(100,255);
    fill(theRed,theGreen,theBlue,theAlpha)
    ellipse(theX,theY,theDiameter, theDiameter)
   text(random(theArray), 100, 100)
}