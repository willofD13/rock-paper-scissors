  function getPlayerChoice() {
    return prompt('Enter your Choice' ,'');
  }
  let playerSelection;

  
  let items = ['Rock', 'Paper', 'Scissors'];
  function getComputerChoice() {
    return items[Math.floor(Math.random()*items.length)]
  }
  let computerSelection;
  
  
   function playRound(playerSelection, computerSelection){
    playerSelection = getPlayerChoice();
    console.log(playerSelection);
    computerSelection=getComputerChoice();
    console.log(computerSelection);
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

 playRound(playerSelection,computerSelection);
 playRound(playerSelection,computerSelection);
 playRound(playerSelection,computerSelection);
 playRound(playerSelection,computerSelection);
 playRound(playerSelection,computerSelection);

  
  
  


  
  
  
     
  
     
  
  
  
  
  

   

   





