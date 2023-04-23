let playerSelection = prompt('Enter your choice', '');
console.log(playerSelection);
let computerSelection = getComputerChoice();

let items = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice() {
  return items[Math.floor(Math.random()*items.length)]
}
console.log(getComputerChoice());

function playerRound(playerSelection,computerSelection) {
  if (playerSelection.toLowerCase === 'rock' && computerSelection=== 'Rock' 
  || playerSelection=== 'paper' && computerSelection === 'Paper'
  || playerSelection=== 'scissors' && computerSelection==='Scissors') {
    return 'It is a tie!'
  }
}
console.log(playerRound(playerSelection,computerSelection));




