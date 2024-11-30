const colors = [
    { value: 500, color: '#FFB3BA', rarity: 0.1, colorName: 'Mega Camera Man' }, // pastel red
    { value: 25, color: '#B3CDE0', rarity: 0.2, colorName: 'Skibidi toilet' }, // pastel blue
    { value: 100, color: '#C1E1C1', rarity: 0.3, colorName: 'Camera man' }, // pastel green
    { value: 350, color: '#FFFFBA', rarity: 0.1, colorName: 'Mega Skibidi toile' }, // pastel yellow
    { value: 500, color: '#D1C4E9', rarity: 0.05, colorName: 'TV Man' }, // pastel purple
    { value: 500, color: '#FFCCB6', rarity: 0.05, colorName: 'TV Woman' }, // pastel orange
    { value: 1500, color: '#FFDFD3', rarity: 0.05, colorName: 'Mega TV Woman' }, // pastel pink
    { value: 1500, color: '#D9D9D9', rarity: 0.05, colorName: 'Mega TV Man' }, // pastel brown
    { value: 12500, color: '#E0E0E0', rarity: 0.05, colorName: 'MegaPapuSkibdiSigma' }, // pastel gray
    { value: 25000 , color: '#FFD700', rarity: 0.01, colorName: 'DigitalCircusSkibdiPomniGigaChadSigmaVoid' } // gold
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
    const colorElement = document.getElementById('color');
    
    colorElement.style.color = selectedColor.color;
    score += selectedColor.value;
    scoreElement.textContent = `Score: ${score}`;
    rarityElement.textContent = `Rarity: ${selectedColor.rarity * 100}%`;
    colorElement.textContent = `Current color: ${selectedColor.colorName}`;
}

document.getElementById('changeColorButton').addEventListener('click', changeTextColorAndUpdateScore);