function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// une fonction pour lancer 1d6 basée sur la fonction précédente
function roll1d6() {
    score = getRandomInt(1, 6);
    return score;
}

// on cible le bouton pour lancer le dé
const rollButton = document.getElementById("rollMe");

rollButton.addEventListener("click", () => {
    var diceRoll = roll1d6();
    diceImg = document.getElementById('dice-img');
    // suivant le résultat du dé, on affiche une icône différente
    switch (diceRoll) {
        case 1:
            diceImg.className = "bi bi-dice-1";
            break;
        case 2:
            diceImg.className = "bi bi-dice-2";
            break;
        case 3:
            diceImg.className = "bi bi-dice-3";
            break;
        case 4:
            diceImg.className = "bi bi-dice-4";
            break;
        case 5:
            diceImg.className = "bi bi-dice-5";
            break;
        case 6:
            diceImg.className = "bi bi-dice-6";
            break;
        default:
            break;
        }
    
    // roundScore est le score de la manche
    const roundScore = document.getElementById("round");
    // en cas de 1 sur le dé, le score repart à zéro
    if (diceRoll == 1) {
        roundScore.innerText = 0;
    } else {
        // avec le parseInt on convertit les scores en Int et on les cumule à chaque lancer
        roundScore.innerText = parseInt(roundScore.innerText) + parseInt(diceRoll);
    }
});

