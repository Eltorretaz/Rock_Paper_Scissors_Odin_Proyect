function getComputerChoice() {
    const computerNumberRandom = ['rock', 'paper', 'scissors'];
    const random = Math.ceil(Math.random() * computerNumberRandom.length);
        return computerNumberRandom[random];
        
}

function game() {
    const playerSelection = prompt("Write your election");
    const computerSelection = getComputerChoice();
    let playerPoints = 0;
    let computerPoints = 0;


    function playRound(playerSelection, computerSelection) {
        if(playerSelection === computerSelection){
            console.log(`tie! ${playerSelection} is equal than ${computerSelection}`);
        }
        else if((playerSelection === 'rock' && computerSelection === 'scissors') 
        ||
        (playerSelection === 'paper' && computerSelection === 'paper') 
        ||
        (playerSelection === 'scissors' && computerSelection === 'rock')){
            playerPoints++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else{
            computerPoints++;
            console.log(`You lose! ${playerSelection} beats ${computerSelection}`);
        }
    }

    playRound(playerSelection.toLocaleLowerCase(), computerSelection);
}

function gameLoop() {
    for(let i = 0; i < 10; i++){
        if(playerPoints > 4){
            return (`Congratulations, you win haved ${playerPoints} and computer haved ${computerPoints}`);
        }
        if(computerPoints > 4){
            return (`Game over, you lose, haved ${playerPoints} and computer haved ${computerPoints}`);
        }
        game();
    }
}

gameLoop();