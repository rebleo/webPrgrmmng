console.log("hello JS");

let theButton = $("#myButton").on("click", theFunction)
let theLat, theLong;
let theURL = "https://www.google.com/maps/@"

function theFunction(){
    console.log("jquery!");
    $('h3').append("<p> you hare here:")
    // window.open(theURL)
}

//console.log(navigator.geolocation)
if ("geolocation" in navigator) {
    console.log("connected!")
  } else {
    console.log("not connected");
  }

navigator.geolocation.getCurrentPosition(function(position){
    console.log(position.coords.latitude, position.coords.longitude)
    theLat = position.coords.latitude;
    theLong = position.coords.longitude;
    theUrl = theURL + theLong + "," + theLat
})


if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
  }

  // LIST cameras + mics
//https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
navigator.mediaDevices.enumerateDevices().then(function(devices){
    devices.forEach(function(device){
      console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
    });
  }).catch(function(err) {
    conssole.log(err.name + ": " + err.message);
  });

  var constraints = {
    audio: false,
    video: {
      width: 900,
      height: 360
    }
  }
// list cameras + mics

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
    var theVideo = document.querySelector('video');
    theVideo.srcObject = mediaStream;
    theVideo.onloadedmetadata = function(e){
      theVideo.play();
    };
  }).catch(function(err){
    console.log(err.name + ": " + err.message);
  })