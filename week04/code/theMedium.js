console.log("the message!")
let thePxl = ["red", "green", "blue", "yellow"];
thePxl.splice(0,2)
console.log(thePxl)

let theRed, theGreen, theBlue, theImage;

theRed = document.querySelector('p');
theGreen = document.querySelector('main');

theImage = document.querySelector('img');
let theButton = document.getElementById('eraserButton');
theButton.addEventListener('click', whenClick);

function whenClick(){
    console.log('button 1 clicked!');
    theRed.textContent = "you pressed the button!"
    theRed.style.backgroundColor = "white"
    theRed.style.fontSize = 30;
    theGreen.style.backgroundColor = "white";
}
