const LOSE = -1;
const TIE = 0;
const WIN = 1;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getPlayerChoice() {
    const choice = prompt("Choose Rock, Paper, or Scissors")
    return choice[0].toUpperCase() + choice.substring(1).toLowerCase();
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
    let playerScore = 0;
    let computerScore = 0;

    if (computerScore > playerScore) {
        console.log(`You Lose! Player: ${playerScore} | Computer: ${computerScore}`);
    } else if (playerScore > computerScore) {
        console.log(`You Win! Player: ${playerScore} | Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! Player: ${playerScore} | Computer: ${computerScore}`);
    }
}

playGame()

let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('scissors')

rock.addEventListener('click', () => {
    console.log("Player picked Rock");
});

paper.addEventListener('click', () => {
    console.log("Player picked Paper");
});

scissors.addEventListener('click', () => {
    console.log("Player picked Scissors");
});