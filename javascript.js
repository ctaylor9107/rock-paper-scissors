

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



console.log(getComputerChoice());


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
        return "Please enter a valid choice"
    }
}


console.log(getHumanChoice());



