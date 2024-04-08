// Variables that store a selection of either "rock", "paper", or "scissors" and the winner between both
let player1 = randomChoice();
let player2 = randomChoice();
let result = winner(player1, player2);

// Variables that store each players score
let player1score=0;
let player2score=0;

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
score(result);

console.log(`Player 1 chose ${player1} while player 2 chose ${player2} and the result is: ${result} The score is now ${player1score}-${player2score}.`)