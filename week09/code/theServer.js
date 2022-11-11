console.log("a backend console message")
// let theInput = 800
// console.log(theInput * 7);
//
const theExpress = require('express');
// console.log(theExpress)
// 
const myApp = theExpress();
const myPort = myApp.listen(12345);

myApp.use(theExpress.static('viewer'))