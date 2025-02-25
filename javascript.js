

// Function to choose computer's choice
// in Rock, Paper, Scissors game


function getComputerChoice() {
    let randomChoice = Math.random()

        if (randomChoice >= 0 && randomChoice < 0.3) {
             return "Rock"
        } 
        else if (randomChoice >= 0.3 && randomChoice < 0.6) {
            return "Paper"
        }
        else if (randomChoice >= 0.6) {
            return "Scissors"
        }
}




// Function to allow the human player to make a choice
// in the Rock, Paper, Scissors game


function getHumanChoice() {
    let humChoice = prompt("Choose one: Rock, Paper, or Scissors")

    if (humChoice === null) {
        return "Try again"
    }
    else if (humChoice.toLowerCase() === "") {
        return "Don't be afraid, you can beat the computer"
    }
    else if (humChoice.toLowerCase() === "rock") {
        return "Rock"
    }
    else if (humChoice.toLowerCase() === "scissors") {
        return "Scissors"
    }
    else if (humChoice.toLowerCase() === "paper") {
        return "Paper"
    }
    else {
        return "Please enter a valid choice."
    }
}



// Variables to track human and computer scores

let humanScore = 0
let computerScore = 0




// Function to determine who wins the round based on human and computer choices
// and increment the score by 1 for whoever won the round

function playRound(humanChoice, computerChoice) {


    
    if ((humanChoice === "Rock" && computerChoice === "Rock")
        ||(humanChoice === "Paper" && computerChoice === "Paper")
        ||(humanChoice === "Scissors" && computerChoice === "Scissors")) {
        return "Sorry, you both chose the same. It is a tie, no points awarded."
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore = computerScore + 1;
        return "You Lose. Paper beats Rock. The computer gets one point."
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore = humanScore + 1;
        return "You Win! Rock beats Scissors. You get a point!"
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore = computerScore + 1;
        return "You Lose. Scissors beats Paper. The computer gets one point."
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore = humanScore + 1;
        return "You Win! Paper beats Rock. You get a point!"
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore = computerScore + 1;
        return "You Lose. Rock beats Scissors. The computer gets one point."
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore = humanScore + 1;
        return "You win! Scissors beats Paper. You get a point!"
    }
    else if (humanChoice){
        return "Please enter a valid choice."
    }
    else if (humanChoice === null) {
        return "Try again."
    }


}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);
console.log(playRound(humanSelection, computerSelection));

console.log(humanScore, computerScore);

