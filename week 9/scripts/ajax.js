$(document).ready(function () {
    $("button").click(function () {
        $("#carInformation").load("data/carInfo.txt", fadeText);
    });
});

function fadeText()
{
    $("#carInformation").fadeOut("slow").fadeIn("slow");
}