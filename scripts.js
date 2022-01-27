// Initializing the Scores
let computerScore = 0;
let playerScore = 0;
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
  playerSelection = null;
}
// Rock Paper Scissors single round and logic function
function playRound(playerSelection, computerSelection) {
  let result = "";
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    result = `Player : ${playerSelection}\nComputer : ${computerSelection}\nComputer Wins`;
  } else if (playerSelection === computerSelection) {
    result = `Player : ${playerSelection}\nComputer : ${computerSelection}\nIt's a tie`;
  } else {
    playerChoice++;
    `Player : ${playerSelection}\nComputer : ${computerSelection}\nPlayer Wins`;
  }
}
// game
function game() {
  for (let i = 0; i <= 5; i++) {
    return playRound(playerSelection, computerSelection);
  }
}
game();
