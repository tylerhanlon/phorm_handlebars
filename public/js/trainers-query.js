$(document).ready(function(){
    var current_image = 0;
    const images = $('.trainers-row');
    const pics = $('.trainer-pic')
    addNewElement();
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
        var curr_name = $('#trainer-name');
        var curr_quote = $('#trainer-quote');
    
        switch(current_image) {
            case 0:
                curr_name.html("Coach T'ai");
                curr_quote.html("WE ALL WANT TO BE GOOD. WE ALWAYS AIM FOR BETTER. BUT REMEMBER, THERE IS NO BEST WITHOUT THE EFFORT.");
                break;
            case 1:
                curr_name.html("Coach Morgan");
                curr_quote.html("FITNESS IS NOT JUST PHYSICAL. IT’S A MENTAL GAME OF STRENGTH AND FORTITUDE. I LOVE PUSHING MY CLIENTS TO DO WHAT THEY THINK THEY CAN’T. STEPPING A BIT OUT OF YOUR COMFORT ZONE CAN LEAD TO A CONDITIONED AND HEALTHY BODY.");
                break;
            case 2:
              curr_name.html("Coach Amanda");
              curr_quote.html("MY PRIMARY FOCUS HAS ALWAYS BEEN CORRECTIVE EXERCISE. IT IS IMPORTANT TO ME THAT EVERYONE HAS AN INDIVIDUALIZED PROGRAM TO SAFELY MEET AND EXCEED THEIR GOALS.");
              break;
            case 3:
                
                curr_name.html("Coach Peter");
                curr_quote.html("CORRECT MECHANICS AND FORM IS WHAT BUILDS GREAT BODIES. I PRIORITIZE LEARNING THE CORRECT MECHANICS OF LIFTING IN ORDER TO PROGRESS IN WEIGHT EACH WEEK.");
                break;
            default:
                curr_name.html("Coach Tai");
                curr_quote.html("We all want to be good. We always aim for better. But remember, there is no best without the effort");
          }
    }
    
    
})


