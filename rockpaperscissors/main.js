let userScore = 0;
let rivalScore = 0;
const buttons = document.querySelectorAll('button');
const displayUserScore = document.querySelector('#userScore');
const displayRivalScore = document.querySelector('#rivalScore');

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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.id;
        rivalChoice = getComputerChoice();
    })
})
