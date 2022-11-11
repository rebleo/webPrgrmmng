console.log("this is a front end console log")
//
const theClick = document.querySelector('#thisAwesomeButton');
theClick.addEventListener('click', makeUser);
//
const theUser = document.getElementById("#theUser");
const theResponse = document.querySelector("h3");


function makeUser(){
    console.log("ssomethin");
    theResponse.textContent = "something changed"
}

let something = fetch('/getTheData', GET)
console.log(something)