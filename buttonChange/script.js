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
const tierProperties = [
    { tierName: 'common', color: '#c5c9c8', rarity: 0.58, score: 25 },
    { tierName: 'uncommon', color: '#89dd00', rarity: 0.32, score: 50 },
    { tierName: 'rare', color: '#23baff', rarity: 0.06, score: 100 },
    { tierName: 'epic', color: '#9270ff', rarity: 0.02, score: 2000 },
    { tierName: 'legendary', color: '#e7a617', rarity: 0.015, score: 3000  },
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
    score+=cardScore;    
    scoreElement.textContent = `Score: ${score}`;
    rarityElement.textContent = `Rarity: ${rarity}%`; 
    skibidiElement.textContent = `You got a ${actualSkibidi.skibidiName}!!`;
    console.log(`${actualSkibidi.skibidiName} Tier: ${tierProperties[skibidiTier].tierName} Puntos: ${cardScore}`);
}

document.getElementById('changeColorButton').addEventListener('click', changeTextColorAndUpdateScore);