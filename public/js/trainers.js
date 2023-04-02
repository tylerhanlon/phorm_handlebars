const next = document.getElementById('next-btn');
const prev = document.getElementById('prev-btn');
const images = document.querySelector('.trainers-row');

addNewElement();

var current_image = 0;

next.addEventListener('click', next_image);
prev.addEventListener('click', previous_image);

function next_image() {
    //Function to scroll to next image
    current_image++;
    if(current_image >= images.childElementCount){
        current_image = 0;
    }
    images.style.transitionDuration = "0.5s";
    images.style.transform = `translate(-${current_image * 19.5}vw)`;
    update_trainer_info();
}

function previous_image() {
    //Function to scroll to previous image 
    current_image--;
    if(current_image < 0){
        current_image = images.childElementCount - 1;
    }
    images.style.transitionDuration = "0.5s";
    images.style.transform = `translate(-${current_image * 19.5}vw)`;
    update_trainer_info();
}

function addNewElement(){
    //DOM Manipulation function which adds an element to my page
    var newElement = document.createElement("div");
    newElement.style.color = "white";
    newElement.style.padding = "2px";
    var newText = document.createTextNode("Sign up to schedule a call with one of our trainers!");

    newElement.appendChild(newText);
    var summary = document.getElementsByClassName("trainer-summary");
    summary[0].appendChild(newElement);
}

function nodeList_loop_border(){
    //Uses a loop to iterate through all child nodes and apply a special border to the one which matches the current image being shown
    var children = images.children;
    for (var i = 0; i < images.childElementCount; i++){
        if(i == current_image){
            children[i].style.border = "1px solid gold";
        }
        else {
            children[i].style.border = "2px solid black";
        }
    }
}

function update_trainer_info() {
    //Function to update the information on the page 
    nodeList_loop_border();
    var curr_name = document.getElementById('trainer-name');
    var curr_quote = document.getElementById('trainer-quote');
    switch(current_image) {
        case 0:
            curr_name.innerHTML = "Coach Tai";
            curr_quote.innerHTML = "WE ALL WANT TO BE GOOD. WE ALWAYS AIM FOR BETTER. BUT REMEMBER, THERE IS NO BEST WITHOUT THE EFFORT.";
            break;
        case 1:
            curr_name.innerHTML = "Coach Morgan";
            curr_quote.innerHTML = "FITNESS IS NOT JUST PHYSICAL. IT’S A MENTAL GAME OF STRENGTH AND FORTITUDE. I LOVE PUSHING MY CLIENTS TO DO WHAT THEY THINK THEY CAN’T. STEPPING A BIT OUT OF YOUR COMFORT ZONE CAN LEAD TO A CONDITIONED AND HEALTHY BODY.";
            break;
        case 2:
          curr_name.innerHTML = "Coach Amanda";
          curr_quote.innerHTML = "MY PRIMARY FOCUS HAS ALWAYS BEEN CORRECTIVE EXERCISE. IT IS IMPORTANT TO ME THAT EVERYONE HAS AN INDIVIDUALIZED PROGRAM TO SAFELY MEET AND EXCEED THEIR GOALS.";
          break;
        case 3:
            
            curr_name.innerHTML = "Coach Peter";
            curr_quote.innerHTML = "CORRECT MECHANICS AND FORM IS WHAT BUILDS GREAT BODIES. I PRIORITIZE LEARNING THE CORRECT MECHANICS OF LIFTING IN ORDER TO PROGRESS IN WEIGHT EACH WEEK.";
            break;
        default:
            curr_name.innerHTML = "Coach Tai";
            curr_quote.innerHTML = "We all want to be good. We always aim for better. But remember, there is no best without the effort";
      }
}