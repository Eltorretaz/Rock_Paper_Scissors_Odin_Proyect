let playerSelection

const game = (playerSelection) => {
    console.log('juego corriendo con ' + playerSelection);
}

const selectionRock = document.getElementById('btn1');
selectionRock.addEventListener('click', () => {
    playerSelection = 'Rock'
    game(playerSelection);
});

const selectionPaper = document.getElementById('btn2');
selectionPaper.addEventListener('click', () => {
    playerSelection = 'Paper'
    game(playerSelection);
});

const selectionScissors = document.getElementById('btn3');
selectionScissors.addEventListener('click', () => {
    playerSelection = 'Scissors'
    game(playerSelection);
});
