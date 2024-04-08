// Import the 'prompt-sync' module
const prompt = require('prompt-sync')({sigint: true});

// Initial variables
let player1;
let player2;
let result;
let player1score=0;
let player2score=0;
let round=1;
let roundsToPlay;

//Display the introduction and get the amount of rounds to be played
console.log();
console.log("Welcome to Rashell's version of the rock, paper, scissors game!");
roundsToPlay = prompt("How many rounds would you like to play? ");

// Validate the amount of rounds and respond accordingly
if (roundsToPlay >= 1){
    // Play game the amount of rounds said
    while (round <= roundsToPlay){
        console.log();
        console.log(`Round ${round}/${roundsToPlay}:`);
        player1= prompt("Rock, paper, scissors? ");
        player1= player1.toLowerCase();
        if (player1 == "rock" || player1 == "paper" || player1 == "scissors"){
            player2 = randomChoice();
            result = winner(player1, player2);
            score(result);
            console.log(`Player 1 chose ${player1} while player 2 chose ${player2}... ${result} The score is now ${player1score}-${player2score}.`);
            round++;
        } else {
            console.log("Invalid choice, please try again.");
        }
    }
    // Display final score message
    console.log()
    round= round - 1;
    if (player1score > player2score){
        console.log(`${round} out of ${roundsToPlay} rounds played. Final score: ${player1score}-${player2score}. Congratulations!`);
    } else if (player1score < player2score) {
        console.log(`${round} out of ${roundsToPlay} rounds played. Final score: ${player1score}-${player2score}. Better luck next time!`);
    } else {
        console.log(`${round} out of ${roundsToPlay} rounds played. Final score: ${player1score}-${player2score}. It's a tie! Play again to try to beat player 2.`);
    }
} else {
    console.log("Invalid amount of rounds, please try again.");
    return; // Exit the program if the player doesn't choose a valid amount of rounds
}

// Function that returns a random selection of either "rock", "paper", or "scissors"
function randomChoice(){
    let choice= Math.floor(Math.random() * 3);
    if (choice === 0){
        return "rock";
    } else if (choice === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

// Function that returns the winner based on the two player choices
function winner(player1, player2){
    if (player1 == player2){
        return "It's a tie!";
    } else if ((player1 == "rock" && player2 == "scissors") || (player1 == "paper" && player2 == "rock") || (player1 == "scissors" && player2 == "paper")){
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

// Function that keeps track of each players score
function score(result){
    if (result == "Player 1 wins!"){
        player1score++ ;
    } else if (result == "Player 2 wins!"){
        player2score++ ;
    } else {
        // do nothing
    }
}
