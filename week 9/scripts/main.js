let bike = {
    "manufacturer" : "Chevy",
    "model" : "equinox",
    "owner" : {
        "firstName" : "Terry",
        "lastName" : "Bradshaw"
    },
    "colors" : [
        "red",
        "white",
        "black",
        "navy"
    ]
}

$(function () {
$("button").click(function () {
    showCarInfo();
});

});

function showCarInfo()
{
    $("#carInformation").html("Manufacturer: " + car.manufacturer 
    + "<br>Model:" + car.model + "<br>First Name:" + car.owner.firstName + "<br>Last Name:" 
    + car.owner.lastName + "<br>Sizes Available:<br>" +
    car.sizes[0] + "<br>" + car.sizes[1] + "<br>" + car.sizes[2] + "<br>" + car.sizes[3]);
}