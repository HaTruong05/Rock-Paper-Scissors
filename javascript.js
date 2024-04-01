const LOSE = -1;
const TIE = 0;
const WIN = 1;

let playerScore;
let computerScore;

const ROCK = document.querySelector('#rock')
const PAPER = document.querySelector('#paper')
const SCISSORS = document.querySelector('#scissors')

const MAX_SCORE = 5

const OUTCOME = document.querySelector("#outcome");
const SCOREBOARD = document.querySelector("#scoreboard");
OUTCOME.classList.add("hide")

function detectSpaceBar(event) {
    if (event.key === " " || event.key === "Spacebar" || event.key === "Enter"){
        playGame();
        document.removeEventListener("keydown", detectSpaceBar)
    }
}

// ROCK.classList.add("no-hover")
// PAPER.classList.add("no-hover")
// SCISSORS.classList.add("no-hover")
playGame();

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function resolveTurn(playerSelection){
    const computerChoice = getComputerChoice();
    OUTCOME.textContent = `Player chose ${playerSelection}. Computer chose ${computerChoice}. `;

    const roundOutcome = playRound(playerSelection, computerChoice);
    if (roundOutcome === TIE) {
        OUTCOME.textContent += "It's a tie!";
    } else if (roundOutcome === WIN) {
        OUTCOME.textContent += "You win this round!";
        playerScore++;
    } else {
        OUTCOME.textContent += "You lose this round!";
        computerScore++;
    }
    
    SCOREBOARD.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
}

function endGame(){
    if (playerScore === MAX_SCORE){
        OUTCOME.textContent = "You won! Press spacebar to play again.";
    } else {
        OUTCOME.textContent = "You lost! Press spacebar to play again.";
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
    resolveTurn(playerSelection);
    if (playerScore === MAX_SCORE || computerScore === MAX_SCORE){
        endGame();
    }

}

function rockChoice(event){
    event.target.blur();
    updateResult("Rock");
    OUTCOME.classList.add("show")
}

function paperChoice(event){
    event.target.blur();
    updateResult("Paper");
    OUTCOME.classList.add("show")
}

function scissorsChoice(event){
    event.target.blur();
    updateResult("Scissors");
    OUTCOME.classList.add("show")
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