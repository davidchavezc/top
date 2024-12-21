userName = 'David';
let userScore = 0;
let rivalScore = 0;
const buttons = document.querySelectorAll('button');

function getComputerChoice(){
    let computerChoice = parseInt(Math.random() * 3) + 1;
    if (computerChoice === 1){
        computerChoice = 'rock';
    } else if (computerChoice === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function playRound(usChoice, riChoice) {
    const winningMessage = document.querySelector('#winningMessage');
    let winner = null;
    let roundResults;
    switch(usChoice){
        case 'rock':
            if(riChoice ==='rock'){
                roundResults = 'Draw!!'
            }
            else if(riChoice === 'paper'){
                roundResults = "Your rock is wrapped by the rivals' paper!";
                winner = 'rival';
            }
            else{
                roundResults = "Your rock destroys the rivals' scissors!"
                winner = 'user'
            }
            break;
        case 'paper':
            if(riChoice ==='rock'){
                roundResults = "Your paper wraps around your rivals' rock!";
                winner = 'user';
            }
            else if(riChoice === 'paper'){
                roundResults = "Draw";
            }
            else{
                roundResults = "The rivals' scissors slash trough your paper!";
                winner = 'rival';
            }
            break;
        case 'scissors':
            if(riChoice ==='rock'){
                roundResults = "The rivals' rock smashes your scissors!";
                winner = 'rival';
            }
            else if(riChoice === 'paper'){
                roundResults = "Your scissors cut trough the rivals' paper!";
                winner = 'user';
            }
            else{
                roundResults = "Draw";
            }
    }
    winningMessage.textContent = roundResults;
    return winner;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const scores = document.querySelector('#displayScores');
        userChoice = button.id;
        rivalChoice = getComputerChoice();
        let winner = playRound(userChoice, rivalChoice);
        if(winner){
            winner === 'user' ? userScore++ : rivalScore++; 
        }
        scores.textContent = `${userName}: ${userScore} Rival: ${rivalScore}`;
    })
})