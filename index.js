const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("Playerdisplay");
const computerDisplay = document.getElementById("Computerdisplay");
const resultDisplay = document.getElementById("Resultdisplay");

const playerScoreElement = document.getElementById("playerscore");
const computerScoreElement = document.getElementById("computerscore");

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;  // Track the number of rounds

function playGame(playerChoice) {
    if (roundCount >= 20) {
        return;  // No more rounds after 20
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext", "redtext");
    if (result === "YOU WIN") {
        resultDisplay.classList.add("greentext");
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (result === "YOU LOSE") {
        resultDisplay.classList.add("redtext");
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }

    roundCount++;

    if (roundCount === 20) {
        declareFinalWinner();
        disableGameButtons();
    }
}

function declareFinalWinner() {
    resultDisplay.classList.remove("greentext", "redtext");
    resultDisplay.classList.add("small-text");

    if (playerScore > computerScore) {
        resultDisplay.textContent = " WINNER 🏆!";
        resultDisplay.classList.add("greentext");
    } else if (computerScore > playerScore) {
        resultDisplay.textContent = "LOSER ✋!";
        resultDisplay.classList.add("redtext");
    } else {
        resultDisplay.textContent = "FINAL RESULT: IT'S A TIE!";
    }
}

function disableGameButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    playerDisplay.textContent = "PLAYER:";
    computerDisplay.textContent = "COMPUTER:";
    resultDisplay.textContent = "";
    resultDisplay.classList.remove("greentext", "redtext");

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}
