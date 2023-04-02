function getNodeValue(obj, tag) {
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

function ajaxRequestXML(trainerIndex){
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        //Check if server status was okay
        if (xhr.status === 200) {
            //Get XML from the server
            var response = xhr.responseXML;
            var container = document.getElementById("trainers-header");
            //Find content elements
            var content = response.getElementsByTagName('content');
          
            container.innerText = getNodeValue(content[trainerIndex], 'h1');
        }
    };
    xhr.open('GET', 'trainerHeader.xml', true);
    
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
                ajaxRequestXML(0);
                break;
            case 1:
                ajaxRequestXML(1);
                break;
            case 2:
                ajaxRequestXML(2);
                break;
            case 3:
                ajaxRequestXML(3);
                break;
            default:
                ajaxRequestXML(0);
          }
    }
    
    
})