function game() {
  function getPlayerChoice() {
    return prompt('Enter your Choice' ,'');
  }
  let playerSelection = getPlayerChoice();
  console.log(playerSelection);
  
  let items = ['Rock', 'Paper', 'Scissors'];
  
  
  
  function getComputerChoice() {
    return items[Math.floor(Math.random()*items.length)]
  }
  let computerSelection = getComputerChoice();
  console.log(computerSelection);
  
   function playRound(playerSelection, computerSelection){
    if ((playerSelection.toLowerCase() === 'rock') && (computerSelection=== 'Rock') 
    || (playerSelection.toLowerCase()=== 'paper') && (computerSelection === 'Paper')
    || (playerSelection.toLowerCase()=== 'scissors') && (computerSelection==='Scissors')) {
      return 'it is a tie'
    }
    else if ((playerSelection.toLowerCase()=== 'rock') && (computerSelection=== 'Paper')
    || (playerSelection.toLowerCase()=== 'paper') && (computerSelection=== 'Scissors')
    || (playerSelection.toLowerCase()=== 'scissors') && (computerSelection=== 'Rock')) {
      return 'you lose'
    }
    else {return 'you win'}
  }
  
  
  let result = playRound(playerSelection,computerSelection);
  console.log(result);
}
  
  
  
     
  
     
  
  
  
  
  

   

   





