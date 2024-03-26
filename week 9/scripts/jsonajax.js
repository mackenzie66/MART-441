$(document).ready(function () {
    $("button").click(function () {
        $("#carInformation").load("data/car.json", function(responseText){
            var car = JSON.parse(responseText);
            $("#bikeInformation").html("Manufacturer: " + car.manufacturer 
        + "<br>Model:" + bike.model + "<br>First Name:" + car.owner.firstName + "<br>Last Name:" 
        + car.owner.lastName + "<br>Colors Available:<br>" +
        car.sizes[0] + "<br>" + car.sizes[1] + "<br>" + car.sizes[2] + "<br>" + car.sizes[3]);
        });
    });
});

/* function fadeText()
{
    $("#carInformation").fadeOut("slow").fadeIn("slow");
}
*/