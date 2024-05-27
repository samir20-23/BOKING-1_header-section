let searchpirsonalis = document.getElementById("searchpirsonalis");
let selectlengthpirsonal = document.getElementById("selectlengthpirsonal");
let createInputs = function() {
    
    let mainDiv = document.getElementById('selectlengthpirsonal');
    selectlengthpirsonal.style.border="1px solid black";
    selectlengthpirsonal.style.boxShadow=" blue 0px 0px 21px -11px";
    selectlengthpirsonal.style.background=" rgb(255, 255, 255)";

    // Check if inputs are already created
    if (mainDiv.querySelector('div#Adults')) {
        return; // If already created, exit the function
    }

    // Create the Adults div
    let adultsDiv = document.createElement('div');
    adultsDiv.id = 'Adults';
    let adultsP = document.createElement('p');
    adultsP.textContent = 'Adults';
    let adultsInput = document.createElement('input');
    adultsInput.id="valueAdults";
    adultsInput.type = 'number';
    adultsInput.value=2;
    adultsInput.min = 0;
    adultsDiv.appendChild(adultsP);
    adultsDiv.appendChild(adultsInput);
  
    // Create the Children div
    let childrenDiv = document.createElement('div');
    childrenDiv.id = 'Children';
    let childrenP = document.createElement('p');
    childrenP.textContent = 'Children';
    let childrenInput = document.createElement('input');
    childrenInput.id="valueChilds";
    childrenInput.value=0;
    childrenInput.type = 'number';
    childrenInput.min = 0;
    childrenDiv.appendChild(childrenP);
    childrenDiv.appendChild(childrenInput);
  
    // Create the Rooms div
    let roomsDiv = document.createElement('div');
    roomsDiv.id = 'Rooms';
    let roomsP = document.createElement('p');
    roomsP.textContent = 'Rooms';
    let roomsInput = document.createElement('input');
    roomsInput.id="valueRooms";
    roomsInput.type = 'number';
    roomsInput.value=1;
    roomsInput.min = 0;
    roomsDiv.appendChild(roomsP);
    roomsDiv.appendChild(roomsInput);
  
    // Create the submit button
    let submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.id = 'done';
    submitButton.value="Done"
    submitButton.min=0;
  
    // Append all the elements to the main div
    mainDiv.appendChild(adultsDiv);
    mainDiv.appendChild(childrenDiv);
    mainDiv.appendChild(roomsDiv);
    mainDiv.appendChild(submitButton);   


    submitButton.addEventListener("click",function(){
        selectlengthpirsonal.style.display="none";
    })
 
    // Remove the event listener after creating inputs once
    searchpirsonalis.removeEventListener('click', createInputs);



    // values 
    let aduults= document.getElementById("adults");
let childs= document.getElementById("childs");
let rooms= document.getElementById("rooms");

// inputs
let valueAdults= document.getElementById("valueAdults");
let valueChilds= document.getElementById("valueChilds");
let valueRooms= document.getElementById("valueRooms");

valueAdults.addEventListener("input",function(){
    aduults.innerHTML=valueAdults.value;
})

valueChilds.addEventListener("input",function(){
 childs.innerHTML=valueChilds.value;
})

valueRooms.addEventListener("input",function(){
    rooms.innerHTML=valueRooms.value;

    //                                              values

})
};

// Add event listener to searchpirsonalis
searchpirsonalis.addEventListener("click", createInputs);
// 

searchpirsonalis.addEventListener("click",function(){
    
    selectlengthpirsonal.style.display="flex";
})

//                                                                                 select div 


