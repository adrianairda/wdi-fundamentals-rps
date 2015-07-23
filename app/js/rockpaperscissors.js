////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var winner;


function getPlayerMove(move) {
   return move || getInput();
        }

function getComputerMove(move) {
   return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
   
    if (playerMove === computerMove) {
        winner = "tie";
        console.log("It's a tie");
    }
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            winner = "player";
            console.log("Player wins");
        }
        else {
            winner = "computer";
            console.log("Computer wins");
        }
    }

    else if (playerMove === "paper") {
        if (computerMove === "rock"){
            winner = "player";
            console.log("Player Wins");
        }
        else {
            winner = "computer";
            console.log("Computer wins");
        }
    }

    else if (playerMove === "scissors"){
        if (computerMove === "paper") {
            winner = "player";
            console.log("Player wins");
        }
        else {
            winner = "computer";
            console.log("Computer wins");
        }
    }
return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   while (playerWins < 5 && computerWins < 5){ 
       
        getWinner(getPlayerMove(), getComputerMove());
  
        if (winner == "player") {
        playerWins++;
        }
        else if (winner == "computer") {
        computerWins++;
        }
        else {
        playerWins++ && computerWins++;
        }
        
 /*console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);*/
console.log('The score is ' + playerWins + ' to ' + computerWins + '\n');
   }
    return [playerWins, computerWins];
}

playToFive();
