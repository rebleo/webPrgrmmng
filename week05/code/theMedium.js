console.log("the message!")
// if you notice there is another js file
// being served by the HTML
console.log(theTxt)
// objects
const rainBow = {
   red: 'apple.jpg',
   orange: 'orange.jpg',
   yellow: 'lemon.jpg',
}

console.log(rainBow.red)

rainBow.green = 'frog.jpg'
console.log(rainBow)

// adding an event parameter into a function
// .this
//
function whatHappens(theEvent){
   console.log("it happened!");
   const myImage = theEvent.currentTarget;
   myImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Emoji_u1f914.svg/360px-Emoji_u1f914.svg.png'

   const myTitle = theEvent.currentTarget;
   myTitle.textContent = "this is what happens";
}
const myPara = document.querySelector('p');
myPara.addEventListener('click', whatHappens)

const image = document.querySelector('img');
image.addEventListener('click', whatHappens)




let theRed, theGreen, theBlue, theImage;
 let theButtons = document.querySelectorAll('button')
theRed = document.querySelector('p');
theGreen = document.querySelector('main');
theImage = document.querySelector('img');

let thePxl = ["red", "green", "blue"];
let theColor;

for (let i=0; i <theButtons.length; i++){
   theColor = theButtons[i].style.backgroundColor = thePxl[i]
   theButtons[i].textContent = "";
   theGreen.append(thePxl[i])
}

// let ourButtons = document.getElementById('newButtons');

// class theButtons {
//    constructor() {
//       this.theElement = document.createElement("button");
//    }

//    potato() {
//       ourButtons.append(this.theElement);
//    }
// }

// theButton1 = new theButtons();
// theButton2 = new theButtons();
// theButton3 = new theButtons();
// theButton1.potato()
// theButton2.potato()
// theButton3.potato();