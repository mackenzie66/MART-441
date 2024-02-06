function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Chick starts by walking into the barn. Should Chick say hi to miss piggy or keep walking to the pond?";
        document.getElementById("choice1").innerHTML = "Say Hi to Miss Piggy";
        document.getElementById("choice2").innerHTML = "Walk to pond";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Chick decides to get some air. Chick hears something by the road.";
        document.getElementById("choice1").innerHTML = "Explore the noise";
        document.getElementById("choice2").innerHTML = "Stay put";
    } else if (choice == 1 && answer1 == "Say Hi to Miss Piggy") {
        document.getElementById("story").innerHTML = "Miss Piggy offers Chick some hay to take a nap on. Should Chick take a nap?";
        document.getElementById("choice1").innerHTML = "Take a nap";
        document.getElementById("choice2").innerHTML = "No nap";
    } else if (choice == 2 && answer2 == "Walk to pond") {
        document.getElementById("story").innerHTML = "Chick has never been to the pond. He is scared. Should Chick swim on his own or stay on the shore?";
        document.getElementById("choice1").innerHTML = "Go for a swim";
        document.getElementById("choice2").innerHTML = "Stay on the shore";
    } else if (choice == 1 && answer1 == "Explore the noise") {
        document.getElementById("story").innerHTML = " Chick finds the road is busy with cars. What should chick do?";
        document.getElementById("choice1").innerHTML = "Cross the road";
        document.getElementById("choice2").innerHTML = "Go back to the barn";
    } else if (choice == 2 && answer2 == "Stay put") {
        document.getElementById("story").innerHTML = "Chick bumps into other chicks his own size. Should he say Hi? ";
        document.getElementById("choice1").innerHTML = "Say Hi";
        document.getElementById("choice2").innerHTML = "Grab a snack";
    }
    // need to do these
    else if (choice == 1 && answer1 == "Take a nap") {
        document.getElementById("story").innerHTML = "Chick finally get some rest after a long days travel." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "No nap") {
        document.getElementById("story").innerHTML = "With no nap Chick is ready to party with is new friend!  " + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Go for a swim pond") {
        document.getElementById("story").innerHTML = "Chick is swimming on his own and loving it!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Stay on the shore") {
        document.getElementById("story").innerHTML = "Chick was able to have a nice relaxing day by the pond." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Cross the road") {
        document.getElementById("story").innerHTML = "Chick narrowly makes it across the road and keeps exploring!." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Go back to the barn") {
        document.getElementById("story").innerHTML = "Is Chick ready to explore the farm and give it another shot?" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Say hi") {
        document.getElementById("story").innerHTML = "Chick now has new friends and they are showing him around the farm!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Grab a snack") {
        document.getElementById("story").innerHTML = "Chick eats some corn and is happy and full!" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "Chick is our newest member of the farm! Help Chick find his way around and make new friends. Are you ready? ";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Chick thanks you!";

    }


}