const skibidi = [
    { skibidiName: 'Camera Man', tier: 0 },
    { skibidiName: 'Skibidi toilet', tier: 0 },
    { skibidiName: 'Pomni', tier: 0 },
    { skibidiName: 'Chamba', tier: 0 },
    { skibidiName: 'Digital', tier: 0 },
    { skibidiName: 'Legolas', tier: 0 },
    { skibidiName: 'Gold Skibidi', tier: 1 },
    { skibidiName: 'Tilin', tier: 1 },
    { skibidiName: 'Mega Camera Man', tier: 1 }, 
    { skibidiName: 'Mega Skibidi toilet', tier: 1 },
    { skibidiName: 'TV Man', tier: 1 },
    { skibidiName: 'TV Woman', tier: 1 },
    { skibidiName: 'Mega TV Man', tier: 2 },
    { skibidiName: 'Mega TV Woman', tier: 2 },
    { skibidiName: 'Kai Cenat', tier: 2 },
    { skibidiName: 'iShowSpeed', tier: 2 },
    { skibidiName: 'MegaPapuSkibdiSigma', tier: 3 },
    { skibidiName: 'DigitalCircusSkibdiPomniGigaChadSigmaVoid', tier: 4 },
    { skibidiName: `Toy Chica es la unica animatronica que tiene ropa la cual es 
        un short que la hace ver muy sexy`, tier: 4 },
    { skibidiName: 'Rey de los Tilines', tier: 4 },
    { skibidiName: 'DigitalCircusSkibdiPomniGigaChadSigmaVoidChambaEdgingGoonerKaiCenatLolCow', tier: 5 },
    { skibidiName: 'Chingonsisisimo Cabron hdsptm', tier: 6} 
]; 

// Sort the skibidi array by tier
skibidi.sort((a, b) => a.tier - b.tier);

const tierProperties = [
    { tierName: 'common', color: '#c5c9c8', rarity: 0.58, score: 25 },
    { tierName: 'uncommon', color: '#89dd00', rarity: 0.32, score: 50 },
    { tierName: 'rare', color: '#23baff', rarity: 0.06, score: 100 },
    { tierName: 'epic', color: '#9270ff', rarity: 0.025, score: 2000 },
    { tierName: 'legendary', color: '#e7a617', rarity: 0.010, score: 3000  },
    { tierName: 'omega', color: '#rainbow', rarity: 0.0035, score: 10000 },
    { tierName: 'mythic', color: '#e90000', rarity: 0.0015, score: 20000  },
]

function generateSkibidi() {
    const totalRarity = tierProperties.reduce((sum, tier) => sum + tier.rarity, 0);
    let randomRarity = Math.random() * totalRarity;
    let selectedTier;
    for (const tier of tierProperties) {
        if (randomRarity < tier.rarity) {
            selectedTier = tier;
            break;
        }
        randomRarity -= tier.rarity;
    }
    const skibidisOfSelectedTier = skibidi.filter(s => s.tier === tierProperties.indexOf(selectedTier));
    const randomSkibidi = skibidisOfSelectedTier[Math.floor(Math.random() * skibidisOfSelectedTier.length)];
    return randomSkibidi;
}

let score = 0;
let skibidiCounts = {};

function registerSkibidiHistory(skibidi) {
    const historyElement = document.getElementById('skibidiHistory');
    const tier = tierProperties[skibidi.tier];
    
    // Update the count for the skibidi
    if (!skibidiCounts[skibidi.skibidiName]) {
        skibidiCounts[skibidi.skibidiName] = 0;
    }
    skibidiCounts[skibidi.skibidiName]++;
    
    // Check if the skibidi already exists in the history
    let listItem = document.getElementById(`history-${skibidi.skibidiName}`);
    if (!listItem) {
        listItem = document.createElement('li');
        listItem.id = `history-${skibidi.skibidiName}`;
        if (tier.color === '#rainbow') {
            listItem.classList.add('rainbow');
        } else {
            listItem.style.color = tier.color;
        }
        historyElement.appendChild(listItem);
    }
    
    // Update the list item text
    listItem.textContent = `(${skibidiCounts[skibidi.skibidiName]}) ${skibidi.skibidiName} (Tier: ${tier.tierName})`;
}

function changeTextColorAndUpdateScore() {
    const actualSkibidi = generateSkibidi();    
    const scoreElement = document.getElementById('score');
    const rarityElement = document.getElementById('rarity');
    const skibidiElement = document.getElementById('skibidi');
    let skibidiTier = actualSkibidi.tier;
    let rarity = Math.ceil(tierProperties[skibidiTier].rarity * 100);
    let cardScore = tierProperties[skibidiTier].score;
    if (tierProperties[skibidiTier].color === '#rainbow') { 
        skibidiElement.classList.add('rainbow');
    } else {
        skibidiElement.classList.remove('rainbow');
        skibidiElement.style.color = tierProperties[skibidiTier].color;
    }
    score += cardScore;    
    scoreElement.textContent = `Score: ${score}`;
    rarityElement.textContent = `Rarity: ${rarity}%`; 
    skibidiElement.textContent = `You got a ${actualSkibidi.skibidiName}!!`;
    console.log(`${actualSkibidi.skibidiName} Tier: ${tierProperties[skibidiTier].tierName} Puntos: ${cardScore}`);

    // Register the skibidi in the history
    registerSkibidiHistory(actualSkibidi);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

document.getElementById('changeColorButton').addEventListener('click', changeTextColorAndUpdateScore);
document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);
document.getElementById('highContrastButton').addEventListener('click', toggleHighContrast);    