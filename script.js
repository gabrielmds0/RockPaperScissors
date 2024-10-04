
let userWins = 0; // Initialize user wins
        let computerWins = 0; // Initialize computer wins
        let draws = 0; // Initialize draws


// Function to get the computer's choice
function getComputerChoice() {
    const a = Math.floor(Math.random() * 3);
    let b;
    if (a === 0) {
        b = "rock";
    } else if (a === 1) {
        b = "paper";
    } else {
        b = "scissors";
    }
    return b;
}

// Function to determine the result of the game
function Results(userChoice) {
    const computerChoice = getComputerChoice(); // Get the computer's choice
    console.log("Computer's choice: " + computerChoice); // Show the computer's choice

    if (userChoice === computerChoice) {
        draws++;
        return "It's a Draw!";
    }

    // Check if the computer wins
    if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "paper" && userChoice === "rock") ||
        (computerChoice === "scissors" && userChoice === "paper")
    ) {
        computerWins++;
        return "Computer Wins!";
    } else {
        userWins++;
        return "You Win!";
    }
}

let playAgain = true; // Flag to control the loop

while (playAgain) {
    const input = prompt("Choose: rock, paper, or scissors:");
    if (input) {
        const result = Results(input.trim().toLowerCase()); // Call the game logic with user input
        alert(result); // Show the result in an alert box
    } else {
        alert("No choice made.");
    }
    alert(`Scoreboard:\nYou: ${userWins}\nComputer: ${computerWins}\nDraws: ${draws}`);


    // Ask if the user wants to play again
    const playAgainResponse = prompt("Do you want to play again? (yes/no)");
    playAgain = playAgainResponse && playAgainResponse.trim().toLowerCase() === "yes";
}

alert("Thanks for playing!"); // Goodbye message
