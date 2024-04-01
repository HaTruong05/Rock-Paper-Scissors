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
        document.activeElement.blur();
        playGame();
        document.removeEventListener("keydown", detectSpaceBar)
    }
}

playGame();

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function resolveTurn(playerSelection){
    const computerChoice = getComputerChoice();
    OUTCOME.textContent = `Player chose ${playerSelection.toLowerCase()}. Computer chose ${computerChoice.toLowerCase()}. `;

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
    
    scoreboard.innerHTML = `<i class="fas fa-user"></i> ${playerScore} | <i class="fa-solid fa-computer"></i> ${computerScore}`;
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

    document.activeElement.blur()

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
    OUTCOME.classList.remove("hide");
}

function paperChoice(event){
    event.target.blur();
    updateResult("Paper");
    OUTCOME.classList.remove("hide");
}

function scissorsChoice(event){
    event.target.blur();
    updateResult("Scissors");
    OUTCOME.classList.remove("hide");
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
    scoreboard.innerHTML = `<i class="fas fa-user"></i> ${playerScore} | <i class="fa-solid fa-computer"></i> ${computerScore}`;
    OUTCOME.classList.add("hide")
    
    ROCK.addEventListener('click', rockChoice);
    PAPER.addEventListener('click', paperChoice);
    SCISSORS.addEventListener('click', scissorsChoice);

    ROCK.classList.remove("no-hover")
    PAPER.classList.remove("no-hover")
    SCISSORS.classList.remove("no-hover")
}