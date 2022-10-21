console.log("the message")


let theEvent = $(".event");
const theBody =  $("body")

theEvent.click(function() {
    console.log("click!")
})

let theContainer, theImage, theLocation;
$.getJSON("theEvents.json", function(theData) {
    
    for (let location in theData.theEvents){
        // console.log(theData.theEvents[location])
      theObject =  theData.theEvents[location]
    for (let i =0; i < theEvent.length; i++){
        theBody.append("<div>is this working??</div>")
        theContainer = document.createElement('div');
        // add a class attribute
        theContainer.className = 'event';
        theImage = document.createElement('img');
        theImage.src = theObject.map;
        // console.log(theContainer)
        theContainer.appendChild(theImage);
        theBody.append(theContainer);
  
    }
    }   
})