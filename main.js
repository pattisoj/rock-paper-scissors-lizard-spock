console.log(`This is running...`);
let winnerNumber = 0;

let userName = prompt("Type your name. Please use 10 characters or less.");
console.log(userName.length);
while (userName.length > 10) {
  alert("Please enter a name with 10 characters or less");
  userName = prompt("Type your name. Please use 10 characters or less.");
}

userNameSplit = Object.assign([], userName);
userNameSplit[0] = userNameSplit[0].toUpperCase();

userName = userNameSplit.join("");

let confirm1 = true;
let total = 0;
let wins = 0;
let loses = 0;
let draws = 0;

function getPlayer(playerMove, computerMove) {
  if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "rock" && computerMove === "lizard") ||
    (playerMove === "scissors" && computerMove === "paper") ||
    (playerMove === "scissors" && computerMove === "lizard") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "paper" && computerMove === "spock") ||
    (playerMove === "lizard" && computerMove === "spock") ||
    (playerMove === "lizard" && computerMove === "paper") ||
    (playerMove === "spock" && computerMove === "scissors") ||
    (playerMove === "spock" && computerMove === "rock")
  ) {
    winnerNumber = 1;
    wins++;
  } else if (
    (playerMove === "rock" && computerMove === "paper") ||
    (playerMove === "rock" && computerMove === "spock") ||
    (playerMove === "scissors" && computerMove === "spock") ||
    (playerMove === "scissors" && computerMove === "rock") ||
    (playerMove === "paper" && computerMove === "lizard") ||
    (playerMove === "paper" && computerMove === "scissors") ||
    (playerMove === "lizard" && computerMove === "scissors") ||
    (playerMove === "lizard" && computerMove === "rock") ||
    (playerMove === "spock" && computerMove === "lizard") ||
    (playerMove === "spock" && computerMove === "paper")
  ) {
    winnerNumber = -1;
    loses++;
  } else if (
    (playerMove === "rock" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "paper") ||
    (playerMove === "lizard" && computerMove === "lizard") ||
    (playerMove === "spock" && computerMove === "spock")
  ) {
    winnerNumber = 0;
    draws++;
  } else {
    alert("Value not recognised. Please try again");
    total--;
  }
  return winnerNumber;
}

while (confirm1 === true) {
  let playerMove = prompt("Type your move").toLowerCase();
  let computerMove = ["rock", "paper", "scissors", "spock", "lizard"];

  const random = Math.floor(Math.random() * computerMove.length);
  console.log(random);
  computerMove = computerMove[random];
  console.log(computerMove);
  getPlayer(playerMove, computerMove);
  total++;
  alert(
    `Your totals so far ${userName}: Games: ${total} Wins: ${wins} Draws: ${draws} Loses: ${loses}`
  );
  if (confirm(`${userName}, would you like to play again?`)) {
    confirm1 = true;
  } else {
    confirm1 = false;
  }
}
