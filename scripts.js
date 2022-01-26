function computerPlay() {
  let choicesArray = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random() * choicesArray.length);

  if (computerChoice === 1) {
    return choicesArray[0];
  } else if (computerChoice === 2) {
    return choicesArray[1];
  }
  return choicesArray[2];
}

let computerSelection = computerPlay();
let playerChoice = prompt("Rock paper or scissors", "");
if (playerChoice === "" || playerChoice === null) alert("Invalid Entry");
let playerSelection = playerChoice.trim().toLowerCase();
if (
  playerSelection === "rock" ||
  playerSelection === "paper" ||
  playerSelection === "scissors"
) {
} else playerSelection === "" || playerSelection === null;

function playRound(playerSelection, computerSelection) {
  let results =
    playerSelection === computerSelection
      ? `Player : ${playerSelection} Computer : ${computerSelection} Its a tie`
      : playerSelection === "rock" && computerSelection === "paper"
      ? `Player : ${playerSelection} Computer : ${computerSelection} Computer Wins`
      : playerSelection === "paper" && computerSelection === "scissors"
      ? `Player : ${playerSelection} Computer : ${computerSelection} Computer Wins`
      : playerSelection === "scissors" && computerSelection === "rock"
      ? `Player : ${playerSelection} Computer : ${computerSelection} Computer Wins`
      : `Player : ${playerSelection} Computer : ${computerSelection} Player Wins`;
  alert(results);
}

console.log(playRound(playerSelection, computerSelection));
