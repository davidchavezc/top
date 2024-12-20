function getComputerChoice(){
    let computerChoice = parseInt(Math.random() * 3) + 1; // Generates a random number between 1 and 3
    return computerChoice;
}

let userScore = 0;
let rivalScore = 0;
let exit = false;
while(5 > (userScore+rivalScore)){
    let userChoice = prompt('Elige un objeto').toLowerCase();
    console.log(`Has elegido ${userChoice}`);
    let rivalChoice = getComputerChoice();
    let winner = playRound(userChoice, rivalChoice);
    if(winner==='user'){
        userScore++;
    } else if(winner==='rival'){
        rivalScore++;
    }
    console.log(`Puntuación: ${userScore}, Rival: ${rivalScore}`);
}
let results;
userScore>rivalScore ?
results = '¡Felicidades! Has ganado Roca, Papiro, y Navaja' : results ='¡Qué desgracia! Te han ganado jugando al azar';
console.log(results); alert(results);

function playRound(choice, rivalChoice){
    let winner = null;
    switch(choice){
        case 'roca':
            if(rivalChoice===1){
                console.log('Empate!!');
            }
            if(rivalChoice===2){
                console.log('El papiro del rival envuelve a tu roca!!');
                winner = 'rival';
            }
            if(rivalChoice===3){
                console.log('¡¡La Navaja del rival es destrozada por tu Roca!!')
                winner = 'user';
            }
            break;
        case 'papiro':
            if(rivalChoice===1){
                console.log('Envuelves a la Roca del rival!!');
                winner = 'user';
                break;
            }
            if(rivalChoice===2){
                console.log('Empate!!');
                break;
            }
            if(rivalChoice===3){
                console.log('¡¡Tu papiro es CORTADO por la asombrosa navaja rival!!')
                winner = 'rival';
                break;
            }
        case 'papiro':
            if(rivalChoice===1){
                console.log('Envuelves a la Roca del rival!!');
                winner = 'user';
                break;
            }
            if(rivalChoice===2){
                console.log('Empate!!');
                break;
            }
            if(rivalChoice===3){
                console.log('¡¡Tu papiro es CORTADO por la asombrosa navaja rival!!');
                winner = 'rival';
                break;
            }
        case 'navaja':
                if(rivalChoice===1){
                    console.log('La roca del rival ANIQUILA a tu navaja!!');
                    winner = 'rival';
                    break;
                }
                if(rivalChoice===2){
                    console.log('Tu EPICA navaja CORTA POR LA MITAD al papiro del rival!!');
                    break;
                }
                if(rivalChoice===3){
                    console.log('¡¡EMPATE, DUELO A MUERTE CON CUCHILLOS!!');
                    break;
                }
        default:
            console.log('Ese objeto no lo conozco...')
    }
    return winner;
}