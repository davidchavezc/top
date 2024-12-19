function getComputerChoice(){
    let computerChoice = parseInt(Math.random() * 3) + 1; // Generates a random number between 1 and 3
    console.log(computerChoice)
    return computerChoice;
}
let userScore = 0;
let rivalScore = 0;
let exit = false;
let choice = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>  {
    button.addEventListener('click', () => {
        choice = button.textContent.toLowerCase();
        console.log(choice)
    })
});