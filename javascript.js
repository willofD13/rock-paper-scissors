const buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
  button.addEventListener('click', playRound);
});

let playerSelection;
 
const items = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
  return items[Math.floor(Math.random()*items.length)]
}
let computerSelection;
let computerScore=0;
let playerScore=0;


function playRound(playerSelection, computerSelection){
  playerSelection = this.textContent ;
  console.log(playerSelection);
  computerSelection=getComputerChoice();
  console.log(computerSelection);
  if (playerSelection===computerSelection.toLowerCase()) {
    const result = document.querySelector('.result');
      result.textContent ='it is a tie';
  }
  else if ((playerSelection=== 'rock') && (computerSelection=== 'Paper')
  || (playerSelection=== 'paper') && (computerSelection=== 'Scissors')
  || (playerSelection=== 'scissors') && (computerSelection=== 'Rock')) 
   { computerScore++
    if (computerScore===1) {
      const result = document.querySelector('.result');
      result.textContent = 'First round lost';
      const score = document.querySelector('.computer')
      score.textContent= '1'
    }
    else if (computerScore===2) {
      const result = document.querySelector('.result');
      result.textContent = 'Another one gone'
      const score = document.querySelector('.computer')
      score.textContent= '2'
    }
    else if (computerScore===3) {
      const result = document.querySelector('.result');
      result.textContent = 'It is okay. Go for the next one!'
      const score = document.querySelector('.computer')
      score.textContent= '3'
    }
    else if (computerScore===4) {
      const result = document.querySelector('.result');
      result.textContent = 'Do not let it happen!'
      const score = document.querySelector('.computer')
      score.textContent= '4'
    } else {const result = document.querySelector('.result');
            result.textContent ='You lost!';
            const score = document.querySelector('.computer')
            score.textContent= '0'
            const plScore = document.querySelector('.player')
            plScore.textContent ='0'
            computerScore=0
            playerScore=0
          }
  
  } else { playerScore++
    if (playerScore===1) {
      const result = document.querySelector('.result');
      result.textContent = 'One down four to go'
      const plScore = document.querySelector('.player')
      plScore.textContent = '1'
    }
    else if (playerScore===2) {
      const result = document.querySelector('.result');
      result.textContent ='Good job!'
      const plScore = document.querySelector('.player')
      plScore.textContent = '2'
    }
    else if (playerScore===3) {
      const result = document.querySelector('.result');
      result.textContent = 'Come on. You got this'
      const plScore = document.querySelector('.player')
      plScore.textContent = '3'
    }
    else if(playerScore===4) {
      const result = document.querySelector('.result');
      result.textContent = 'Matchpoint'
      const plScore = document.querySelector('.player')
      plScore.textContent = '4'
    } else {const result = document.querySelector('.result');
            result.textContent ='You win!!';
            const plScore = document.querySelector('.player')
            plScore.textContent = '5'}
    };
  };

