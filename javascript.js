  function getPlayerChoice() {
    return prompt('Enter your Choice' ,'');
  }
  let playerSelection;

  
  let items = ['Rock', 'Paper', 'Scissors'];
  function getComputerChoice() {
    return items[Math.floor(Math.random()*items.length)]
  }
  let computerSelection;

  let computerScore;
  let playerScore;
  
  
   function playRound(playerSelection, computerSelection){
    playerSelection = getPlayerChoice();
    console.log(playerSelection);
    computerSelection=getComputerChoice();
    console.log(computerSelection);
    if (playerSelection.toLowerCase()===computerSelection.toLowerCase()) {
      return 'it is a tie'
    }
    else if ((playerSelection.toLowerCase()=== 'rock') && (computerSelection=== 'Paper')
    || (playerSelection.toLowerCase()=== 'paper') && (computerSelection=== 'Scissors')
    || (playerSelection.toLowerCase()=== 'scissors') && (computerSelection=== 'Rock')) {
      return 'you lose'
    }
    else {return 'you win'}
  }

 console.log(playRound(playerSelection,computerSelection));
 console.log(playRound(playerSelection,computerSelection));
 console.log(playRound(playerSelection,computerSelection));
 console.log(playRound(playerSelection,computerSelection));
 console.log(playRound(playerSelection,computerSelection));

  
  
  


  
  
  
     
  
     
  
  
  
  
  

   

   





