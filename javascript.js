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
    let result;

    if (playerSelection === computerSelection) {
        result = 'tie';
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            result = 'lose';
        } else {
            result = "win";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            result = 'lose';
        } else {
            result = "win";
        }
    } else {
        if (computerSelection === "Rock") {
            result = "lose";
        } else {
            result = "win";
        }
    }

    if (result === "lose") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (result === "win") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `It's a Tie! You both chose ${playerSelection}`;
    }
}

const tempChoices = ["Rock", "Paper", "Scissors"];
for (i=0; i<15; i++) {
    playerSelection = tempChoices[i%3];
    console.log("Player chose" + playerSelection);
    computerSelection = getComputerChoice();
    console.log("Computer chose" + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}