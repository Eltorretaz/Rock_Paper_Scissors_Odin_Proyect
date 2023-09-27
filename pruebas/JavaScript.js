/* const getComputerChoice = () => {
    
};

const computerSelection = getComputerChoice(); */

function playRound(playerSelection) {

    const computerNumberRandom = Math.ceil(Math.random()*3);

    if(computerNumberRandom === 1){
        computerSelection = 'Rock';
    }
    else if(computerNumberRandom === 2) {
        computerSelection = 'Paper';
    }
    else if(computerNumberRandom === 3){
        computerSelection = 'Scissors';
    }
        console.log(computerSelection);

    if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        retur = 'Ganaste con roca';
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        retur = 'ganaste con hoja';
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        retur = 'ganaste con tijeras';
    }
    else if(computerSelection === 'Rock' && playerSelection === 'Scissors'){
        retur = 'perdiste con tijeras';
    }
    else if(computerSelection === 'Paper' && playerSelection === 'Rock'){
        retur = 'perdiste con roca';
    }
    else if(computerSelection === 'Scissors' && playerSelection === 'Paper'){
        retur = 'perdiste con paple';
    }
    else if( computerSelection === playerSelection){
        retur = 'empate putito';
    };
    console.log(playerSelection);
    console.log(retur);

}


/* const getPlayerChoice = (player, ComputerSelection) => {

    if(player === 'Rock' && ComputerSelection === 'Scissors'){
        console.log('Ganaste con roca');
    }
    else if(player === 'Paper' && ComputerSelection === 'Rock'){
        console.log('ganaste con hoja');
    }
    else if(player === 'Scissors' && ComputerSelection === 'Paper'){
        console.log('ganaste con tijeras');
    }
    if(ComputerSelection === 'Rock' && player === 'Scissors'){
        console.log('perdiste con tijeras');
    }
    else if(ComputerSelection === 'Paper' && player === 'Rock'){
        console.log('perdiste con roca');
    }
    else if(ComputerSelection === 'Scissors' && player === 'Paper'){
        console.log('perdiste con paple');
    }
    else if( selection === player){
        console.log('empate putito');
    };

console.log(`${cpuScore} es ${player} y ${playerScore}`) 

    const liveScore = document.querySelector('h2 span')
    liveScore.innerText = `${playerScore} - ${cpuScore}` 
}; */