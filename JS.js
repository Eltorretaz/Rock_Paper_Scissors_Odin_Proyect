function getComputerChoice() {
    const computerNumberRandom = Math.ceil(Math.random()*3);

    if(computerNumberRandom === 1){
        selection = 'Rock';
    }
    else if(computerNumberRandom === 2) {
        selection = 'Paper';
    }
    else if(computerNumberRandom === 3){
        selection = 'Scissors';
    }
        console.log(selection);
        return computerNumberRandom;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return ('dame tu cosita a a');
    }else if(playerSelection === 1 && computerSelection === 3){
        return ('ganaste mi parce');
    }else if(playerSelection === 2 && computerSelection === 1){
        return ('ganaste mi parce');
    }else if(playerSelection === 3 && computerSelection === 2){
        return ('ganaste mi parce');
    }else if(playerSelection === 1 && computerSelection === 2){
        return ('perdiste mi parce')
    }else if(playerSelection === 2 && computerSelection === 3){
        return ('perdiste mi parce')
    }else if(playerSelection === 3 && computerSelection === 1){
        return ('perdiste mi parce')
    }
}
function player(numero) {
    return (numero);
};

const select = document.getElementById('select');

const playerSelection = player(select);
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));