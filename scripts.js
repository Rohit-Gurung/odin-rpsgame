function computerPlay() {
  let choicesArray = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * choicesArray.length);
  console.log(computerChoice);
  console.log(choicesArray[computerChoice]);
  if (computerChoice === 1) {
    return choicesArray[computerChoice];
  } else if (computerChoice === 2) {
    return choicesArray[computerChoice];
  }
  return choicesArray[computerChoice];
}

let computerSelection = computerPlay();
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

function playRound(playerSelection, computerSelection) {
  let results =
    playerSelection === computerSelection
      ? `Player : ${playerSelection}\nComputer : ${computerSelection}\nIts a tie`
      : playerSelection === "rock" && computerSelection === "paper"
      ? `Player : ${playerSelection}\nComputer : ${computerSelection}\nComputer Wins`
      : playerSelection === "paper" && computerSelection === "scissors"
      ? `Player : ${playerSelection}\nComputer : ${computerSelection}\nComputer Wins`
      : playerSelection === "scissors" && computerSelection === "rock"
      ? `Player : ${playerSelection}\nComputer : ${computerSelection}\nComputer Wins`
      : `Player : ${playerSelection}\nComputer : ${computerSelection}\nPlayer Wins`;
  alert(results);
}
