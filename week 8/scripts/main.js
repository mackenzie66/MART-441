var runSelector = "#run";
var allRuns = new Array();
class RunInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var run = new RunInfo("#run", "images/prefontaine.jpg");
    allRuns.push(run);

    var run = new RunInfo("#oregon", "images/oregon.jpg");
    allRuns.push(run);

    var run = new RunInfo("#usa", "images/usa.jpg");
    allRuns.push(run);

}
$(document).ready(function(){
    initializeArray();
    console.log(allRuns.length);
    console.log(allRuns[0].toString());
    console.log(allRuns[0].theSelector);
    console.log(allRuns[0].theImagePath);
    
    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(allRuns[0].theSelector).attr("src", allRuns[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#first").toggle();
           setInterval(moveSquare, 1000);
        
        $("#second").toggle();
           setInterval(moveCircle, 1000);

        $("#third").toggle();
           setInterval(moveTriangle, 200);

        $(allRuns[0].theSelector).fadeOut().fadeIn();
        
    });
    
   
   
     



});

function moveSquare()
{
    $("#square").animate({left:600}).animate({top:400}).animate({left:500}).animate({top:300});


}

function moveCircle()
{
    $("#circle").animate({left:600}).animate({top:600}).animate({left:700}).animate({top:600});
}

function moveTriangle()
{
    $("#triangle").animate({left:600}).animate({top:600}).animate({left:200}).animate({top:600});
}
