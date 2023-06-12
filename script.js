const button = document.querySelector('.dropdown .dropdown-toggle');
const dropdownItems = document.querySelectorAll('.dropdown .dropdown-menu button');

const scoreText = document.querySelector('.scoreContainer h1');
const player1h1 = document.querySelector('.scoreContainer h1 span:first-child');
const player2h1 = document.querySelector('.scoreContainer h1 span:last-child');

const p1button = document.querySelector('.buttonsContainer button:nth-of-type(1)');
const p2button = document.querySelector('.buttonsContainer button:nth-of-type(2)');
const resetButton = document.querySelector('.buttonsContainer button:nth-of-type(3)');



//console.log(player1h1.textContent); 
//onsole.log(player2h1.textContent);


let maxScore = button.innerText;

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      maxScore = item.textContent;
      button.innerText = maxScore;
      console.log(player1h1.innerText);
      console.log(player2h1.textContent);
    });
});

scoreText.addEventListener('change', function(e){
    if(player1h1>player2h1){
      console.log('player 1 bigger');
    }else if(player1h1<player2h1){
      console.log('player 2 bigger');
    }else{
      console.log('equal');
    }
});

p1button.addEventListener('click', function(){
  player1h1.innerText ++;
});

p2button.addEventListener('click', function(){
  player2h1.innerText ++;
});

resetButton.addEventListener('click', function(){
  player1h1.innerText = "0";
  player2h1.innerText = "0";
});

