// BlackJack21
let currentScore = 0; let rivalScore = 0;
alert('Bienvenido a BlackJack, comencemos...');
while(21>currentScore && 21>rivalScore){
    if (confirm('¿Sacamos otra carta?')){
        let turn = 'user';
        currentScore=score(currentScore, turn);
    } else{
        alert('Entendido, no sacamos otra');}
    turn = 'rival';
    rivalScore=score(rivalScore, turn);
    validateScore(currentScore,rivalScore);
}
function generateCard(min=1,max=12){
    let cardValue = Math.random() * (max - min) + min;
    return parseInt(cardValue);
}
function score(currentScore, turn){
    let currentCard = generateCard()
    currentScore+=currentCard
    alertScore(turn, currentCard, currentScore)
    return (currentScore);
}
function alertScore(turn, card, score){
    turn=='user' ?
    alert(`Sacaste un ${card}, tu puntuación es ahora de ${score}!`) : 
    alert(`Tu rival sacó un ${card}, su puntuación es ahora de ${score}!`);
}
function validateScore(score1, score2){
    if(score1===21){
        alert("Felicidades, has ganado! Gracias por jugar!");
        return 1;
    }
    if(score1>21){
        alert('Lo sentimos, has perdido por menso');
        return 1;
    }
    if(score2===21){
        alert('No mames que te ganó la máquina lmfaoo');
        return 1;
    }
    if(score2>21){
        alert('Máquina pendeja no entiendo cómo pierde');
        return 1;
    }
}