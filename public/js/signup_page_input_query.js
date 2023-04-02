function Customer (fname, lname, em, ph) {
    this.firstName = fname;
    this.lastName = lname;
    this.email = em;
    this.phone = ph;
    this.date = date;
}

var selected = "";
$("#date").datepicker();
$("#date").on("change",function(){
        var selected = $(this).val();
    });

const form = $("#signup-page-form").on('submit', function() {
    var customer = new Customer($("#fname").val(), $("#lname").val(), $("#email").val(), $("#phone").val(), selected);
    alert("Thank you for providing your contact information. Here is the information we have received: \n" + customer.firstName + '\n' + customer.lastName + '\n' + customer.email + '\n' + customer.phone);
})