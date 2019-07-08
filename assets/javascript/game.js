//Variables
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//Start the game with a score of 0.
var wins = 0;
var losses = 0;
var guesses = 9;
var inputs = [];
var winsA = document.getElementById('wins');

var lossesA = document.getElementById('losses');

var guessesA = document.getElementById('guesses');

var inputsA = document.getElementById('inputs');

//Computer guesses
var computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];

//Users input
document.onkeypress = function(event){
var userGuess=event.key;

if(userGuess === computerChoice){
    wins++;
    guesses=9;
    inputs=[];
    winsA.textContent = "Wins:  " + wins;
    } 

    else { if (inputs.includes(userGuess)) {} 
    else { 
        guesses--;
        inputs.push(userGuess);
        guessesA.textContent ="Guesses Left: " + guesses;
        inputsA.textContent ="Your Guesses so far: " + inputs;
            }
        }

if(guesses===0){
    losses++
    guesses++;
    inputs = [];
    lossesA.textContent = "Losses: " + losses;
    }


}
//added into body of HTML
// document.getElementById('wins').innerHTML="Wins:   " + wins;

// document.getElementById('losses').innerHTML="Losses:   " + losses;

// document.getElementById('guesses').innerHTML="Guesses Left:   " + guesses;

// document.getElementById('inputs').innerHTML="Your Guesses so far:   " + inputs;