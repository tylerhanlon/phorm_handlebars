//Change color of nav bar based on the current page (Will add additional global styling javascripts to this page)
let current_url = document.location;

var navContainer = document.getElementsByClassName("navBarElement");

for(var i = 0; i < navContainer.length; i++){
    if(current_url == navContainer[i].firstChild.href){
        navContainer[i].firstChild.className = "current";
    }
}