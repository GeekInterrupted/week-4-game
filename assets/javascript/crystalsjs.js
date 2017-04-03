$(document).ready(function() {

var crystalImagesArray = [
        "assets/images/crystal01.png",
        "assets/images/crystal02.png",
        "assets/images/crystal03.png",
        "assets/images/crystal04.png",
    ];
var computerRandomNumber = 0;
var crystalValuesArray = [];
var crystalPoints = 0;
var wins = 0;
var losses = 0;

//Function to generate random numbers for computer choice and crystals
    
function generateRandomNumber(maxValue, minValue) {
    var randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    return randomNumber;      
}

function updateScore() {
//    console.log("test counter", crystalPoints);
    $("#crystal-points-total").html("Score: " + crystalPoints);
    }
    


function initGame() {
//initial score - counter of cumulative crystal points
    crystalPoints = 0;
    $("#crystal-points-total").html("Score: ");
//random number to guess    
    var minValue = 19;
    var maxValue = 120;
    var computerRandomNumber = generateRandomNumber(maxValue, minValue);
    $("#generated-random-number").html("NUMBER TO MATCH: " + computerRandomNumber);
//random numbers assigned to crystals    
    var minValue = 1;
    var maxValue = 12;
    var crystalValuesArray = [];
    for (j = 0; j < 4; j++) {
        crystalValuesArray.push(generateRandomNumber(maxValue, minValue));
        console.log(crystalValuesArray);
        }
//insert crystals for the values generated
    for (var i = 0; i < crystalImagesArray.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", crystalImagesArray[i]);
        imageCrystal.attr("data-crystal-value", crystalValuesArray[i]);
        $("#crystals").append(imageCrystal);
    }
        
//crystal score adds up when user clicks a crystal     
        $(".crystal-image").on("click", function() {
            var crystalValue = ($(this).attr("data-crystal-value"));
            crystalValue = parseInt(crystalValue);
            crystalPoints += crystalValue;
            updateScore();
            console.log(crystalPoints);
//compare user's cumulative points vs computer's number            
            if (crystalPoints === computerRandomNumber) {
                wins ++;                
                $("#wins").html("Wins: " + wins);
                $("#crystals").empty();
                initGame();
            } else if (crystalPoints >= computerRandomNumber) {
                losses ++;
                $("#losses").html("Losses: " + losses);
                 $("#crystals").empty();
                initGame();
            }

}) //end on click function

}
        
initGame(); 

});  //end ready
    
 