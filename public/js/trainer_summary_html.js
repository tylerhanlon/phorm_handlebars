function ajaxRequestHTML(htmlPath){
    var xhr = new XMLHttpRequest();
    //onLoad function
    console.log(htmlPath);
    xhr.onload = function(){
        if(xhr.status === 200){
            document.getElementsByClassName("trainer-summary")[0].innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", htmlPath, true);
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
                ajaxRequestHTML("/taiSummary.html");
                break;
            case 1:
                console.log("morgan");
                ajaxRequestHTML("/morganSummary.html");
                break;
            case 2:
                ajaxRequestHTML("/amandaSummary.html");
                break;
            case 3:
                ajaxRequestHTML("/peterSummary.html");
                break;
            default:
                ajaxRequestHTML("/taiSummary.html");
          }
    }
    
    
})