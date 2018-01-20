/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gameActive;


init();

var diceDOM = document.querySelector('.dice');

document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gameActive) {
        
        var dice = Math.floor(Math.random() * 6) + 1;

        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if(dice !== 1) {
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }
    }
});

document.getElementsByClassName('btn-hold')[0].addEventListener('click', function() {
    if(gameActive) {
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 10) {
       document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
       diceDOM.style.display = 'none';
       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
       gameActive = false;
    }
    else {
        nextPlayer();
    }
    }    
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0
    
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceDOM.style.display = 'none';
}


function init() {

gameActive = true;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.getElementsByClassName('dice')[0].style.display = 'none';

var roll = document.getElementsByClassName('btn-roll')[0];

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('name-0').textContent = 'PLAYER 1';
document.getElementById('name-1').textContent = 'PLAYER 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

}



// document.getElementById('current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.getElementById('#score').textContent;
// console.log(x);