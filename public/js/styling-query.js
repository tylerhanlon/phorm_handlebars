//Change color of nav bar based on the current page (Will add additional global styling javascripts to this page)
var current_url = document.location;
$('#trainers-header').hide().fadeIn();
$(document).ready(function() {

    $('a').each(function () {
         if(window.location.href.toString().includes($(this).attr("href"))){
            $(this).addClass("current");
     }
    })
})


