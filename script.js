function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// une fonctio pour lancer 1d6 basée sur la fonction précédente
function roll1d6() {
    score = getRandomInt(1, 6);
    return score;
}

// on cible le bouton pour lancer le dé
const rollButton = document.getElementById("rollMe");

rollButton.addEventListener("click", function() {
    var diceRoll = roll1d6();
    diceImg = document.querySelector('img');
    // suivant le résultat du dé, on affiche une icône différente
    switch (diceRoll) {
        case 1:
            diceImg.setAttribute('src', 'img/dé01.png');

            break;
        case 2:
            diceImg.setAttribute('src', 'img/dé02.png');
            break;
        case 3:
            diceImg.setAttribute('src', 'img/dé03.png');
            break;
        case 4:
            diceImg.setAttribute('src', 'img/dé04.png');
            break;
        case 5:
            diceImg.setAttribute('src', 'img/dé05.png');
            break;
        case 6:
            diceImg.setAttribute('src', 'img/dé06.png');
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

