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
