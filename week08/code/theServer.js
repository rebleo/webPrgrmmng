console.log("a backend console message")
// let theInput = 800
// console.log(theInput * 7);
//
const theExpress = require('express');
// console.log(theExpress)
// 
const myApp = theExpress();
const myPort = myApp.listen(12333);

myApp.get('/', function (theRequest,theResponse){
    // theResponse.send("hello worlds");
    let theMessage = '<html><head><title>my great web app</title></head><body><h4>what a website!</h4><img src="https://media.tenor.com/R_WseIIwQ8QAAAAC/beavis-computer.gif"></body></html>'
    theResponse.send(theMessage)
})