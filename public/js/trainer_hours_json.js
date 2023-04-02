function ajaxRequestJSON(trainerIndex){
    //Create XML requesst
    var xhr = new XMLHttpRequest();
    //When readystate changes
    xhr.onload = function() {
        //Check if server status was okay
        if (xhr.status === 200) {
            
            //Get JSON data from server using responseText
            responseObject = JSON.parse(xhr.responseText);
            header = document.getElementById("trainer-quote");
            //Build up string with new content
            var newContent = '';
            var newElement = document.createElement("h3");
            var node = document.createTextNode(responseObject.trainers[trainerIndex].hours);
            newElement.appendChild(node);
            header.appendChild(newElement);
        }

    };
    xhr.open('GET', 'trainer-hours.json', true);
    
    //send request
    xhr.send(null);
}

$(document).ready(function(){
    var current_image = 0;
    const images = $('.trainers-row');
    const pics = $('.trainer-pic')
    //addNewElement();
    $("#prev-btn").click(function() {
       current_image--;
       if(current_image < 0){
           current_image = pics.length - 1;
       }
       images.css("transitionDuration", "0.5s");
       images.css("transform", `translate(-${current_image * 19.5}vw)`);
       update_trainer_info();
    })
    
    $("#next-btn").click(function() {
        current_image++;
        if(current_image >= pics.length){
            current_image = 0;
        }
        images.css('transitionDuration', "0.5s");
        images.css("transform", `translate(-${current_image * 19.5}vw)`);
        update_trainer_info();
    })
    
    function addNewElement(){
        $('.trainer-summary').append('<p>Sign up to schedule a call with one of our trainers!</p>')
    }
    
    function changeBorder(){
        $('.trainer-pic').css("border", "1px solid gold");
    }
    
    function update_trainer_info() {
        switch(current_image) {
            case 0:
                ajaxRequestJSON(0);
                break;
            case 1:
                ajaxRequestJSON(1);
                break;
            case 2:
                ajaxRequestJSON(2);
                break;
            case 3:
                ajaxRequestJSON(3);
                break;
            default:
                ajaxRequestJSON(0);
          }
    }
    
    
})