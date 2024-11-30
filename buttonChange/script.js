const colors = [
    { value: 500, color: '#3d00d6', rarity: 0.1, colorName: 'Mega Camera Man' }, 
    { value: 25, color: '#B3CDE0', rarity: 0.2, colorName: 'Skibidi toilet' },
    { value: 100, color: '#C1E1C1', rarity: 0.3, colorName: 'Camera man' },
    { value: 350, color: '#FFFFBA', rarity: 0.1, colorName: 'Mega Skibidi toile' },
    { value: 500, color: '#D1C4E9', rarity: 0.05, colorName: 'TV Man' },
    { value: 500, color: '#FFCCB6', rarity: 0.05, colorName: 'TV Woman' },
    { value: 1500, color: '#FFDFD3', rarity: 0.05, colorName: 'Mega TV Woman' },
    { value: 1500, color: '#D9D9D9', rarity: 0.05, colorName: 'Mega TV Man' },
    { value: 12500, color: '#E0E0E0', rarity: 0.05, colorName: 'MegaPapuSkibdiSigma' },
    { value: 25000 , color: '#FFD700', rarity: 0.01, colorName: 'DigitalCircusSkibdiPomniGigaChadSigmaVoid' },
    { value: 500000 , color: '#rainbow', rarity: 0.005, colorName: 'DigitalCircusSkibdiPomniGigaChadSigmaVoidChambaEdgingGoonerKaiCenatLolCow' }
];

let score = 0;

function getRandomColor() {
    const random = Math.random();
    let sum = 0;

    for (let i = 0; i < colors.length; i++) {
        sum += colors[i].rarity;
        if (random <= sum) {
            return colors[i];
        }
    }
}

function changeTextColorAndUpdateScore() {
    const selectedColor = getRandomColor();
    const scoreElement = document.getElementById('score');
    const rarityElement = document.getElementById('rarity');
    const skibidiElement = document.getElementById('skibidi');
    if (selectedColor.color === '#rainbow') { // gold color for rainbow effect
        skibidiElement.classList.add('rainbow');
    } else {
        skibidiElement.classList.remove('rainbow');
        skibidiElement.style.color = selectedColor.color;
    }
    score += selectedColor.value;
    scoreElement.textContent = `Score: ${score}`;
    rarityElement.textContent = `Rarity: ${selectedColor.rarity * 100}%`;
    skibidiElement.textContent = `You got a ${selectedColor.colorName}!!`;
}

document.getElementById('changeColorButton').addEventListener('click', changeTextColorAndUpdateScore);