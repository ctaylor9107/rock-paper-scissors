

// Create function to choose computer's
// choice in Rock, Paper, Scissors game


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