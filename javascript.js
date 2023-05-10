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
body.appendChild(div); //here we will see the results

const div2 = document.createElement('div');
div2.classList.add('player')
div2.textContent = '0'
body.appendChild(div2)

const div3 = document.createElement('div')
div3.classList.add('pc')
div3.textContent = '0'
body.appendChild(div3)


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
      const score = document.querySelector('.pc')
      score.textContent= '1'
    }
    else if (computerScore===2) {
      const result = document.querySelector('div');
      result.textContent = 'Another one gone'
      const score = document.querySelector('.pc')
      score.textContent= '2'
    }
    else if (computerScore===3) {
      const result = document.querySelector('div');
      result.textContent = 'It is okay. Go for the next one!'
      const score = document.querySelector('.pc')
      score.textContent= '3'
    }
    else if (computerScore===4) {
      const result = document.querySelector('div');
      result.textContent = 'Do not let it happen!'
      const score = document.querySelector('.pc')
      score.textContent= '4'
    } else {const result = document.querySelector('div');
            result.textContent ='You lost!';
            const score = document.querySelector('.pc')
            score.textContent= '5'}
  
  } else { playerScore++
    if (playerScore===1) {
      const result = document.querySelector('div');
      result.textContent = 'One down four to go'
      const plscore = document.querySelector('.player')
      plscore.textContent = '1'
    }
    else if (playerScore===2) {
      const result = document.querySelector('div');
      result.textContent ='Good job!'
      const plscore = document.querySelector('.player')
      plscore.textContent = '2'
    }
    else if (playerScore===3) {
      const result = document.querySelector('div');
      result.textContent = 'Come on. You got this'
      const plscore = document.querySelector('.player')
      plscore.textContent = '3'
    }
    else if(playerScore===4) {
      const result = document.querySelector('div');
      result.textContent = 'Matchpoint'
      const plscore = document.querySelector('.player')
      plscore.textContent = '4'
    } else {const result = document.querySelector('div');
            result.textContent ='You win!!';
            const plscore = document.querySelector('.player')
            plscore.textContent = '5'}
    };
  };


  
  
  


  
  
  
     
  
     
  
  
  
  
  

   

   





