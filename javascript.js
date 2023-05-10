const body = document.querySelector('body');

const rock = document.createElement('button');
rock.classList.add('rock');
rock.textContent = 'rock';
body.appendChild(rock);

const paper = document.createElement('button');
paper.classList.add('paper');
paper.textContent = 'paper';
body.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add('scissors');
scissors.textContent = 'scissors';
body.appendChild(scissors);

const div = document.createElement('div')
body.appendChild(div);


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
    const result = document.querySelector('div');
      result.textContent ='it is a tie';
  }
  else if ((playerSelection=== 'rock') && (computerSelection=== 'Paper')
  || (playerSelection=== 'paper') && (computerSelection=== 'Scissors')
  || (playerSelection=== 'scissors') && (computerSelection=== 'Rock')) 
   { computerScore++
    if (computerScore===1) {
      const result = document.querySelector('div');
      result.textContent = 'First round lost';
    }
    else if (computerScore===2) {
      const result = document.querySelector('div');
      result.textContent = 'Another one gone'
    }
    else if (computerScore===3) {
      const result = document.querySelector('div');
      result.textContent = 'It is okay. Go for the next one!'
    }
    else if (computerScore===4) {
      const result = document.querySelector('div');
      result.textContent = 'Do not let it happen!'
    } else {const result = document.querySelector('div');
            result.textContent ='You lost!';}
  
  } else { playerScore++
    if (playerScore===1) {
      const result = document.querySelector('div');
      result.textContent = 'One down four to go'
    }
    else if (playerScore===2) {
      const result = document.querySelector('div');
      result.textContent ='Good job!'
    }
    else if (playerScore===3) {
      const result = document.querySelector('div');
      result.textContent = 'Come on. You got this'
    }
    else if(playerScore===4) {
      const result = document.querySelector('div');
      result.textContent = 'Matchpoint'
    } else {const result = document.querySelector('div');
            result.textContent ='You win!!';}
    };
  };
  


  
  
  


  
  
  
     
  
     
  
  
  
  
  

   

   





