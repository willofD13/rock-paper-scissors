  const div = document.createElement('div');
  div.classList.add('buttons');

  const rock = document.createElement('button');
  rock.classList.add('rock');
  rock.textContent = 'rock';
  div.appendChild(rock);

  const paper = document.createElement('button');
  paper.classList.add('paper');
  paper.textContent = 'paper';
  div.appendChild(paper);

  const scissors = document.createElement('button');
  scissors.classList.add('scissors');
  scissors.textContent = 'scissors';
  div.appendChild(scissors);
  
  const body = document.querySelector('body');
  body.appendChild(div);
  
 
  
  
  
  function getPlayerChoice() {
    const a = document.querySelector('.rock');
    a.addEventListener('click', () => {
      console.log(a.textContent);
    });

    const b = document.querySelector('.paper');
    b.addEventListener('click', () => {
      console.log(b.textContent);
    });
    
    const c = document.querySelector('.scissors');
    c.addEventListener('click', () => {
      console.log(c.textContent);
    });
  };
  getPlayerChoice();
    
  let playerSelection;

  
  const items = ['Rock', 'Paper', 'Scissors'];
  function getComputerChoice() {
    return items[Math.floor(Math.random()*items.length)]
  }
  let computerSelection;

  let computerScore=0;
  let playerScore=0;
  
  
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
    || (playerSelection.toLowerCase()=== 'scissors') && (computerSelection=== 'Rock')) 
     { computerScore++
      if (computerScore===1) {
        return 'First round lost'
      }
      else if (computerScore===2) {
        return 'Another one gone'
      }
      else if (computerScore===3) {
        return 'It is okay. Go for the next one!'
      }
      else if (computerScore===4) {
        return 'Do not let it happen!'
      }
      else {return 'The end'}
    
    }else { playerScore++
      if (playerScore===1) {
        return 'One down four to go'
      }
      else if (playerScore===2) {
        return 'Good job!'
      }
      else if (playerScore===3) {
        return 'Come on. You got this'
      }
      else if(playerScore===4) {
        return 'Matchpoint'
      }
      else {return 'The end'}
      }
  }



 if (computerScore>playerScore) {
  console.log('You lost!');
 }
 else if(computerScore<playerScore) {
  console.log('You won!');
 }
 //else{console.log('TIE!')}
  
  
  


  
  
  
     
  
     
  
  
  
  
  

   

   





