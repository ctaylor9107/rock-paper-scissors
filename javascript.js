

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


// function getHumanChoice() {
//     let humChoice = prompt("Choose one: Rock, Paper, or Scissors.\nFirst to 5 points wins.")

//     if (humChoice === null) {
//         return "Try again"
//     }
//     else if (humChoice.toLowerCase() === "") {
//         return "Don't be afraid, you can beat the computer"
//     }
//     else if (humChoice.toLowerCase() === "rock") {
//         return "Rock"
//     }
//     else if (humChoice.toLowerCase() === "scissors") {
//         return "Scissors"
//     }
//     else if (humChoice.toLowerCase() === "paper") {
//         return "Paper"
//     }
//     else {
//         return "Please enter a valid choice."
//     }
// }

// const rock = document.querySelector("#rock");
// const paper = document.querySelector("#paper");
// const scissors = document.querySelector("#scissors");

const buttons = document.querySelectorAll("button");
const resultText = document.querySelector("#results");
const score = document.querySelector("#score");
const winnerText = document.querySelector("#winner-text");
const playerPick = document.querySelector("#player-pick");
const computerPick = document.querySelector("#computer-pick");

let playerSelection
let computerSelection = getComputerChoice();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        playerPick.textContent = "Your choice: " + playerSelection;
        computerPick.textContent = "Computer's choice: " + computerSelection;
        resultText.textContent = playRound(playerSelection);
        score.textContent = "Player Score: " + humanScore + " \nComputer Score: " + computerScore;
    });
});



// function getHumanChoice () {
//     if (btn.textContent === "Rock") {
//         return "Rock"
//     }
//     else if (btn.textContent === "Scissors") {
//         return "Scissors"
//     }
//     else if (btn.textContent === "Paper") {
//         return "Paper"
//     }
//     else {
//         "Please enter a valid choice"
//     }
// };




// Function to play the game, which is playing rounds of rock, paper, scissors until
// either player reaches 5 points

//function playGame() {


    // Variables to track human and computer scores

    let humanScore = 0
    let computerScore = 0

    //function to determine if the game needs to be replayed or if it is over

    //function triggerReplay(){
    
    // Function to determine who wins the round based on human and computer choices
    // and increment the score by 1 for whoever won the round


    
    
    
        function playRound(playerChoice) {

            let humanChoice = playerChoice;
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

        
    

       


    // Display the message declaring outcome of the round and track scores    

    console.log(playRound());
    console.log("Player Score: " + humanScore, "Computer Score: " + computerScore)

    // Function to determine if either score is at 3 yet, is triggered, and placed
    // in a variable
    
    function playAgain() {

        if (humanScore < 5 && computerScore < 5) {
            return "Yes"
        }
        else if (humanScore === 5 || computerScore === 5) {
            return "No"
        }
    }

    //playAgain();

    let replay = playAgain();

    // Based on above variable, the below will trigger the game again or end

    
    // if (replay === "Yes") {
    //    triggerReplay();
    // }
    // else if (replay === "No") {
    //       "Game Over"
    // }
    

    //}

    // Enacts the above code to run through the round and determines if it needs
    // to run through it again or not

    //triggerReplay();

    // Once a score has reached 5, one of the below messages will be displayed
    // based on who won
    
    // if (humanScore > computerScore) {
    //     return "Congratulations, you got to 5 points first. You win!"
    // }
    // else if (computerScore > humanScore) {
    //     return "Better luck next time.  The computer got to 5 points first so you lost.\nRefresh to try again."
    // }
    

       

//}

// Calls the playGame function and displays the winner once it is over

//console.log(playGame());