// Choice selector for Computer
function computerPlay() {
  let choicesArray = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * choicesArray.length);
  if (computerChoice === 1) {
    return choicesArray[computerChoice];
  } else if (computerChoice === 2) {
    return choicesArray[computerChoice];
  }
  return choicesArray[computerChoice];
}
let computerSelection = computerPlay();
// Playerselection prompt
let playerChoice = prompt("Enter Rock Paper or Scissors", "");

if (playerChoice) {
  playerSelection = playerChoice.trim().toLowerCase();
} else {
  alert("Must be Rock Paper or Scissors");
}
if (
  playerSelection === "rock" ||
  playerSelection === "paper" ||
  playerSelection === "scissors"
) {
  playerSelection;
} else {
  alert("Invalid!!!");
  delete playerSelection;
}
// Initializing the Scores
let computerScore = 0;
let playerScore = 0;
// game logic and score incrementor
let result = "";
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    return (result = `Player : ${playerSelection}\nComputer : ${computerSelection}\nComputer Wins`);
  } else if (playerSelection === computerSelection) {
    return (result = `Player : ${playerSelection}\nComputer : ${computerSelection}\nIt's a tie`);
  }
  playerScore++;
  return (result = `Player : ${playerSelection}\nComputer : ${computerSelection}\nPlayer Wins`);
}

function game() {
  playRound(playerSelection, computerSelection);
}
game();
game();
game();
game();
game();
console.log(result);
console.log(result);
console.log(result);
console.log(result);
console.log(result);
console.log(computerScore);
console.log(playerScore);
