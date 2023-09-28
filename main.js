let playerPoints = 0;
let computerPoints = 0;
let playerSelection;
const imgPlayer = document.getElementById('imgPlayerSelection');
const imgComputer = document.getElementById('imgComputerSelection');
const resultRound = document.getElementById('resultRound');
const resultGame = document.getElementById('resultGame');
const score = document.getElementById('score');

const selectionRock = document.getElementById('btn1');
selectionRock.addEventListener('click', () => {
    playerSelection = 'Rock';
    imgPlayer.classList.remove('scissors', 'paper');
    imgPlayer.classList.add('rock');
    gameLoop();
});

const selectionPaper = document.getElementById('btn2');
selectionPaper.addEventListener('click', () => {
    playerSelection = 'Paper';
    imgPlayer.classList.remove('rock', 'scissors');
    imgPlayer.classList.add('paper');
    gameLoop();
});

const selectionScissors = document.getElementById('btn3');
selectionScissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
    imgPlayer.classList.remove('rock', 'paper');
    imgPlayer.classList.add('scissors');
    gameLoop();
});

function getComputerChoice() {
const computerNumberRandom = ['Rock', 'Paper', 'Scissors'];
const random = Math.floor(Math.random() * computerNumberRandom.length);
    
    if(computerNumberRandom[random] === 'Scissors'){
        imgComputer.classList.remove('rock', 'paper');
        imgComputer.classList.add('scissors');
    }else if(computerNumberRandom[random] === 'Paper'){
        imgComputer.classList.remove('rock', 'scissors');
        imgComputer.classList.add('paper');
    }else if(computerNumberRandom[random] === 'Rock'){
        imgComputer.classList.remove('scissors', 'paper');
        imgComputer.classList.add('rock');
    };
    return computerNumberRandom[random];
    
}

function game() {

const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        resultRound.innerHTML = (`tie! ${playerSelection} is equal than ${computerSelection}`);
        score.innerHTML = `player = ${playerPoints} computer = ${computerPoints}`;
    }
    if(
    (playerSelection === 'Rock' && computerSelection === 'Scissors') 
    ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') 
    ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')){
        playerPoints++;
        resultRound.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
        score.innerHTML = `player = ${playerPoints} computer = ${computerPoints}`;
    }
    if(
    (computerSelection === 'Rock' && playerSelection === 'Scissors') 
    ||
    (computerSelection === 'Paper' && playerSelection === 'Rock') 
    ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper')){
        computerPoints++;
        resultRound.innerHTML = `You lose! ${playerSelection} beats ${computerSelection}`;
        score.innerHTML = `player = ${playerPoints} computer = ${computerPoints}`;
        }
    }
}

function gameLoop() {
    if(playerPoints > 4){
        resultGame.classList.add('gameWin')
        resultGame.innerHTML = (`Congratulations, you win haved ${playerPoints} and computer haved ${computerPoints}`);
        return resultGame;
    }
    if(computerPoints > 4){
        resultGame.classList.add('gameOver')
        resultGame.innerHTML = (`Game over, you lose, haved ${playerPoints} and computer haved ${computerPoints}`);
        return resultGame;
    }
    game();
}


