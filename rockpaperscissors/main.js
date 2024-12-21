let userScore = 0;
let rivalScore = 0;
const buttons = document.querySelectorAll('button');
const displayUserScore = document.querySelector('#userScore');
const displayRivalScore = document.querySelector('#rivalScore');

function getComputerChoice(){
    let computerChoice = parseInt(Math.random() * 3) + 1;
    return computerChoice;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.id;
    })
})