// console.log('Hello World');

function getComputerChoice() {
  const randomInt = Math.floor(Math.random() * 3);
  console.log(randomInt);
  if (randomInt === 0) {
    return 'Rock';
  } else if (randomInt === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function getHumanChoice() {
  let humanChoice = prompt(`Please type "Rock", "Paper", or "Scissors".`);
  if (humanChoice.toLowerCase() === 'rock') {
    return 'Rock';
  } else if (humanChoice.toLowerCase() === 'paper') {
    return 'Paper';
  } else if (humanChoice.toLowerCase() === 'scissors') {
    return 'Scissors';
  } else {
    alert(
      `Invalid entry! Please enter a valid move - "Rock", "Paper, or "Scissors".`
    );
  }
}

let humanScore = 0;

let computerScore = 0;
