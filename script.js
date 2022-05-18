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
let rollButton = document.getElementById("rollMe");

// on cible le bouton pour garder le score de la manche
let holdButton = document.getElementById("holdMe");

// roundScore est le score de la manche
let roundScore = document.getElementById("round");

// holdScore est le score global des joueurs
let holdScorePl1 = document.getElementById("global-pl1");
let holdScorePl2 = document.getElementById("global-pl2");

// on cible le joueur en cours
let activePlayer = document.getElementById("active-player");

rollButton.addEventListener("click", () => {
    let diceRoll = roll1d6();
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
    
    // en cas de 1 sur le dé, le score repart à zéro
    if (diceRoll == 1) {
        roundScore.innerText = 0;
        // et le joueur actif change
        if(activePlayer.innerText == "Joueur 1") {
            activePlayer.innerText = "Joueur 2";
        } else {
            activePlayer.innerText = "Joueur 1";
        }

    } else {
        // avec le parseInt on convertit les scores en Int et on les cumule à chaque lancer
        roundScore.innerText = parseInt(roundScore.innerText) + parseInt(diceRoll);
    }
});

// on crée une fonction pour transférer le score de la manche vers le score global du joueur
holdButton.addEventListener("click", () => {
    
    //si le joueur en cours est le joueur 1
    if(activePlayer.innerText == "Joueur 1") {
        holdScorePl1.innerText = parseInt(holdScorePl1.innerText) + parseInt(roundScore.innerText);
        activePlayer.innerText = "Joueur 2";

    //si le joueur en cours est le joueur 2
    } else {
        holdScorePl2.innerText = parseInt(holdScorePl2.innerText) + parseInt(roundScore.innerText);
        activePlayer.innerText = "Joueur 1";

    }
    
    // dans tous les cas, on remet le compteur de la manche à zéro
    roundScore.innerText = "0";    

});