//Input processing for the form on the signup page

//Create new customer object
function Customer (fname, lname, em, ph) {
    this.firstName = fname;
    this.lastName = lname;
    this.email = em;
    this.phone = ph;
}

const form = document.getElementById('signup-page-form');
//We will handle form validation and sending to DB in here
form.addEventListener("submit", function (event) {
    //Create an object of type customer 
    var customer = new Customer(form.elements['fname'].value, form.elements['lname'].value, form.elements['email'].value, form.elements['phone'].value);
    //Display that objects attributes to the confirmation window
    alert("Thank you for providing your contact information. Here is the information we have received: \n" + customer.firstName + '\n' + customer.lastName + '\n' + customer.email + '\n' + customer.phone);
    //in the future I will write this object to a database
})