const getPlayerChoice = (player) => {

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
    
    if(player === 'Rock' && selection === 'Scissors'){
        console.log('Ganaste con roca');
        playerScore++;
    }
    else if(player === 'Paper' && selection === 'Rock'){
        console.log('ganaste con hoja');
        playerScore++;
    }
    else if(player === 'Scissors' && selection === 'Paper'){
        console.log('ganaste con tijeras');
        playerScore++;
    }
    if(selection === 'Rock' && player === 'Scissors'){
        console.log('perdiste con tijeras');
        cpuScore++;
    }
    else if(selection === 'Paper' && player === 'Rock'){
        console.log('perdiste con roca');
        cpuScore++;
    }
    else if(selection === 'Scissors' && player === 'Paper'){
        console.log('perdiste con paple');
        cpuScore++;
    }
    else if( selection === player){
        console.log('empate putito');
    };

    const liveScore = document.querySelector('h2 span')
    liveScore.innerText = `${playerScore} - ${cpuScore}`
};

