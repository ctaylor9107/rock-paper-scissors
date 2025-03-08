


let playerSelection
let computerSelection

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomChoice = Math.random()

        if (randomChoice >= 0 && randomChoice < 0.3) {
            computerSelection = "Rock"
        } 
        else if (randomChoice >= 0.3 && randomChoice < 0.6) {
            computerSelection = "Paper"
        }
        else if (randomChoice >= 0.6) {
            computerSelection = "Scissors"
        }
}


const startPrompt = document.querySelector("#prompt");
const buttons = document.querySelectorAll("button");
const resultText = document.querySelector("#results");
const score = document.querySelector("#score");
const winnerText = document.querySelector("#winner-text");
const playerPick = document.querySelector("#player-pick");
const computerPick = document.querySelector("#computer-pick");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        playerPick.textContent = "Your choice: " + playerSelection;
        resultText.textContent = playRound(playerSelection);
        computerPick.textContent = "Computer's choice: " + computerSelection;
        score.textContent = "Player Score: " + humanScore + " \nComputer Score: " + computerScore;
        if (humanScore < 5 && computerScore < 5) {
            winnerText.textContent = "";
        }
        else if (humanScore === 5 || computerScore === 5) {
            winnerText.textContent = determineWinner();
            startPrompt.remove();
            buttons.forEach((button) => {
                button.remove();
            });
            playerPick.remove();
            computerPick.remove();
            
        }
        
    });
});

   
    

function playRound(playerChoice) {

    let humanChoice = playerChoice;
    getComputerChoice();
    let computerChoice = computerSelection;
    
    if ((humanChoice === "Rock" && computerChoice === "Rock")
        ||(humanChoice === "Paper" && computerChoice === "Paper")
        ||(humanChoice === "Scissors" && computerChoice === "Scissors")) {
        return "Sorry, you both chose " + humanChoice + ". It is a tie, no points awarded."
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore = computerScore + 1;
        return "You lose the round. Paper beats Rock. The computer gets one point."
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore = humanScore + 1;
        return "You win the round! Rock beats Scissors. You get a point!"
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore = computerScore + 1;
        return "You lose the round. Scissors beats Paper. The computer gets one point."
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore = humanScore + 1;
        return "You win the round! Paper beats Rock. You get a point!"
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore = computerScore + 1;
        return "You lose the round. Rock beats Scissors. The computer gets one point."
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore = humanScore + 1;
        return "You win the round! Scissors beats Paper. You get a point!"
    }
    else if (humanChoice){
        return "Please enter a valid choice."
    }
    else if (humanChoice === null) {
        return "Try again."
    }

    
}

        



function determineWinner() {
    if (humanScore > computerScore) {
        return "Congratulations, you got to 5 points first. You win!"
    }
    else if (computerScore > humanScore) {
        return "Better luck next time.  The computer got to 5 points first so you lost.\nRefresh to try again."
    }
}


       