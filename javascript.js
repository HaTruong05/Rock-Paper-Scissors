function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getPlayerChoice() {
    const choice = prompt("Choose Rock, Paper, or Scissors")
    return choice[0].toUpperCase() + choice.substring(1).toLowerCase();
}

for (i=0; i<100; i++) {
    console.log(getComputerChoice());
}