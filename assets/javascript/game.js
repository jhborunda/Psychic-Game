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
console.log(computerChoice);

//Displayed before start of game
winsA.textContent = "Wins:  ";
lossesA.textContent = "Losses: ";
guessesA.textContent ="Guesses Left: ";
inputsA.textContent ="Your Guesses so far: "



//Users input
document.onkeypress = function(event){
var userGuess=event.key;

if(userGuess === computerChoice){
    wins++;
    reset();
    } 

    else { if (inputs.includes(userGuess)) {alert("Try a diffrent word!")}
    else { 
        guesses--;
        inputs.push(userGuess);
        guessesA.textContent ="Guesses Left: " + guesses;
        inputsA.textContent ="Your Guesses so far: " + inputs;
        }

        }

    if(guesses===0){
    losses++
    reset();
    }
}

let reset = function() {
 computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];
 console.log(computerChoice);
 inputs = [];
 guesses = 9;
 winsA.textContent = "Wins:  " + wins;
 inputsA.textContent = "Your Guesses so far: " + inputs;
 guessesA.textContent ="Guesses Left: " + guesses;
 lossesA.textContent = "Losses: " + losses;
}
