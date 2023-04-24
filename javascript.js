let playerSelection = prompt('Enter your choice', '');
console.log(playerSelection);

let items = ['Rock', 'Paper', 'Scissors'];



function getComputerChoice() {
  return items[Math.floor(Math.random()*items.length)]
}
let computerSelection = getComputerChoice();
console.log(computerSelection);


  if ((playerSelection.toLowerCase() === 'rock') && (computerSelection=== 'Rock') 
  || (playerSelection.toLowerCase()=== 'paper') && (computerSelection === 'Paper')
  || (playerSelection.toLowerCase()=== 'scissors') && (computerSelection==='Scissors')) {
    console.log ('it is a tie');
  }
  else if ((playerSelection.toLowerCase()=== 'rock') && (computerSelection=== 'Paper')
  || (playerSelection.toLowerCase()=== 'paper') && (computerSelection=== 'Scissors')
  || (playerSelection.toLowerCase()=== 'scissors') && (computerSelection=== 'Rock')) {
    console.log('you lose');
  }
  else {console.log('you win');}
  
   





