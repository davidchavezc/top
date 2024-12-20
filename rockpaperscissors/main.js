function getComputerChoice(){
    let computerChoice = parseInt(Math.random() * 3) + 1; // Generates a random number between 1 and 3
    // console.log(computerChoice)
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
        rivalChoice = getComputerChoice();
        playRound(choice, rivalChoice);
    })
});

const scoreKeeper = document.getElementById('#score');
const winnerKeeper = document.getElementById('#ganador');

let playMessage = [
    'Empate!!',
    'El papel del rival envuelve a tu roca!!',
    '¡¡La tijera del rival es destrozada por tu roca!!',
    '¡¡Tu papel envuelve la roca del rival!!',
    '¡¡La tijera del rival corta tu papel!!',
    '¡¡Tu roca destroza la tijera del rival!!',
    '¡¡Tu tijera corta el papel del rival!!',
    '¡¡La roca rival destruye tus tijeras!!'
 ]

 function playRound(choice, rivalChoice){
    let winner;
    switch(choice){
        case 'roca':
            if(rivalChoice===1){ // roca
                winMessage = playMessage[0];
                // console.log(winMessage)
            }
            if(rivalChoice===2){ // papel
                winMessage = playMessage[1];
                winner = 'rival';
            }
            if(rivalChoice===3){ // tijera
                winMessage = playMessage[2];
                winner = 'user';
            }
            break;
        case 'papel':
            if(rivalChoice===1){
                winMessage = playMessage[3];
                winner = 'user';
                break;
            }
            if(rivalChoice===2){
                winMessage = playMessage[0];
                break;
            }
            if(rivalChoice===3){
                winMessage = playMessage[4];
                winner = 'rival';
                break;
            }
        case 'tijera':
            if(rivalChoice===1){
                winMessage = playMessage[7]
                winner = 'rival';
                break;
           }
            if(rivalChoice===2){
                winMessage = playMessage[6]
                break;
                }
            if(rivalChoice===3){
                winMessage = playMessage[0]
                break;
                }
            // console.log(winMessage)
            return winner;
    }
 }