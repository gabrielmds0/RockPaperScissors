
let userWins = 0; // Initialize user wins
let computerWins = 0; // Initialize computer wins
let draws = 0; // Initialize draws

function startGame() {
    // Redirect to the play page
    window.location.href = 'play.html';
}


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
function playGame(userChoice) {
    const computerChoice = getComputerChoice(); // Get the computer's choice
    console.log("Computer's choice: " + computerChoice); // Show the computer's choice in the console

    // Update the displayed computer's choice in the HTML
    document.getElementById('computerChoice').textContent = computerChoice;

    // Determine the outcome of the game
    if (userChoice === computerChoice) {
        draws++;
        alert("It's a Draw!");
    } else if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "paper" && userChoice === "rock") ||
        (computerChoice === "scissors" && userChoice === "paper")
    ) {
        computerWins++;
        alert("Computer Wins!");
    } else {
        userWins++;
        alert("You Win!");
    }

    // Update the scoreboard after each round
    updateScoreboard();
}

function updateScoreboard() {
    // Update the scoreboard with the current score values
    document.getElementById('userWins').textContent = userWins;
    document.getElementById('computerWins').textContent = computerWins;
    document.getElementById('draws').textContent = draws;
}

document.querySelector('.rock').addEventListener('click', function() {
    playGame('rock');
});

document.querySelector('.paper').addEventListener('click', function() {
    playGame('paper');
});

document.querySelector('.scissors').addEventListener('click', function() {
    playGame('scissors');
});


function showScoreboard() {
    alert(`Scoreboard:\nYou: ${userWins}\nComputer: ${computerWins}\nDraws: ${draws}`);
}

// Attach event listeners to buttons
//document.querySelector('.playRound').addEventListener('click', Results);
document.querySelector('.ScoreBoard').addEventListener('click', showScoreboard);