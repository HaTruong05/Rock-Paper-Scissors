const LOSE = -1;
const TIE = 0;
const WIN = 1;

let playerScore = 0;
let computerScore = 0;

const ROCK = document.querySelector('#rock')
const PAPER = document.querySelector('#paper')
const SCISSORS = document.querySelector('#scissors')

const MAX_SCORE = 5

function detectSpaceBar(event) {
    if (event.key === " " || event.key === "Spacebar" || event.key === "Enter"){
        playGame();
        document.removeEventListener("keydown", detectSpaceBar)
    }
}

document.addEventListener('keydown', detectSpaceBar);
ROCK.classList.add("no-hover")
PAPER.classList.add("no-hover")
SCISSORS.classList.add("no-hover")

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function resolveTurn(playerSelection, outcome){
    const computerChoice = getComputerChoice();
    outcome.textContent = `Player chose ${playerSelection}. Computer chose ${computerChoice}. `;

    const roundOutcome = playRound(playerSelection, computerChoice);
    if (roundOutcome === TIE) {
        outcome.textContent += "It's a tie!";
    } else if (roundOutcome === WIN) {
        outcome.textContent += "You win this round!";
        playerScore++;
    } else {
        outcome.textContent += "You lose this round!";
        computerScore++;
    }

    const scoreboard = document.querySelector("#scoreboard");
    scoreboard.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
}

function endGame(outcome){
    if (playerScore === MAX_SCORE){
        outcome.textContent = "You won! Play again?";
    } else {
        outcome.textContent = "You lost! Try again.";
    }
    playerScore = 0;
    computerScore = 0;

    ROCK.removeEventListener('click', rockChoice);
    PAPER.removeEventListener('click', paperChoice);
    SCISSORS.removeEventListener('click', scissorsChoice);

    ROCK.classList.add("no-hover")
    PAPER.classList.add("no-hover")
    SCISSORS.classList.add("no-hover")

    document.addEventListener('keydown', detectSpaceBar);
}

function updateResult(playerSelection){
    const outcome = document.querySelector("#outcome");
    resolveTurn(playerSelection, outcome);

    if (playerScore === MAX_SCORE || computerScore === MAX_SCORE){
        endGame(outcome);
    }

}

function rockChoice(event){
    updateResult("Rock")
    event.target.blur()
}

function paperChoice(event){
    updateResult("Paper")
    event.target.blur()
}

function scissorsChoice(event){
    updateResult("Scissors")
    event.target.blur()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return TIE;
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return LOSE;
        } else {
            return WIN;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return LOSE;
        } else {
            return WIN;
        }
    } else {
        if (computerSelection === "Rock") {
            return LOSE;
        } else {
            return WIN;
        }
    }
}

function playGame() {
    playerScore = 0;
    computerScore = 0;
    const scoreboard = document.querySelector("#scoreboard");
    scoreboard.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
    
    ROCK.addEventListener('click', rockChoice);
    PAPER.addEventListener('click', paperChoice);
    SCISSORS.addEventListener('click', scissorsChoice);

    ROCK.classList.remove("no-hover")
    PAPER.classList.remove("no-hover")
    SCISSORS.classList.remove("no-hover")
}