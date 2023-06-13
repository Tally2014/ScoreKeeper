const button = document.querySelector('.dropdown .dropdown-toggle');
const dropdownItems = document.querySelectorAll('.dropdown .dropdown-menu button');

const scoreText = document.querySelector('.scoreContainer h1');
const player1h1 = document.querySelector('.scoreContainer h1 span:first-child');
const player2h1 = document.querySelector('.scoreContainer h1 span:last-child');

const p1button = document.querySelector('.buttonsContainer button:nth-of-type(1)');
const p2button = document.querySelector('.buttonsContainer button:nth-of-type(2)');
const resetButton = document.querySelector('.buttonsContainer button:nth-of-type(3)');

const winnerStatus = document.querySelector('.winnerText');
const div = document.querySelector('.content');



let maxScore = button.innerText;

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      maxScore = item.textContent;
      button.innerText = maxScore;
    });
});


p1button.addEventListener('click', function(){
  player1h1.innerText ++;
  textColor(player1h1.innerText,player2h1.innerText);
});

p2button.addEventListener('click', function(){
  player2h1.innerText ++;
  textColor(player1h1.innerText,player2h1.innerText);
});

resetButton.addEventListener('click', function(){
  reset();
});

function textColor(val1,val2){
  if(parseInt(val1)>parseInt(val2)){
    player1h1.style.color = "green";
    player2h1.style.color = "red";
    if(parseInt(val1) === parseInt(maxScore)){

        const h5 = document.createElement('h5');
        h5.classList.add("winnerText");
        h5.id = "winner";
        h5.innerText = "Player 1 wins";
        h5.style.color = 'green';
        div.appendChild(h5);
        
        p1button.disabled = true;
        p2button.disabled = true;
    }

  }else if(parseInt(val1)<parseInt(val2)){
    player2h1.style.color = "green";
    player1h1.style.color = "red";
    if(parseInt(val2) === parseInt(maxScore)){

        const h5 = document.createElement('h5');
        h5.id = "winner";
        h5.classList.add("winnerText");
        h5.innerText = "Player 2 wins";
        h5.style.color = 'blue';
        div.appendChild(h5);

        p1button.disabled = true;
        p2button.disabled = true;
    }
  }else{
    player1h1.style.color = "black";
    player2h1.style.color = "black";
  }
}

function reset(){
  player1h1.innerText = "0";
  player2h1.innerText = "0";
  textColor(player1h1.innerText,player2h1.innerText);
  p1button.disabled = false;
  p2button.disabled = false;

  const winnerMessage = document.querySelector('#winner');
  if(winnerMessage){
    winnerMessage.remove();
  }
  
}
