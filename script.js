// --- VARIABLES ---

// on cible le bouton pour voir les règles
let seeRules = document.getElementById("rules");

// on cible le bouton pour recharger le jeu
let reloadGame = document.getElementById("newGame");

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

// on cible l'icône bootstrap du dé
diceImg = document.getElementById('dice-img');

// on cible les barres de progrès
let progressPl1 = document.getElementById("progress-pl1");
let progressPl2 = document.getElementById("progress-pl2");

// --- FONCTIONS ---

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

// une fonction pour changer de couleur les éléments suivant le joueur actif
function changeColor() {
    if(activePlayer.innerHTML == "Blue Wizard") {
        roundScore.style.backgroundColor = "#3437F0";
        rollButton.style.backgroundColor = "#3437F0";
        holdButton.style.backgroundColor = "#3437F0";
    } else {
        roundScore.style.backgroundColor = "#BF6363";
        rollButton.style.backgroundColor = "#BF6363";
        holdButton.style.backgroundColor = "#BF6363";
    }
}

// --- EVENEMENTS ---

rollButton.addEventListener("click", rollDice);

function rollDice() {
    let diceRoll = roll1d6();
    
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
        if(activePlayer.innerText == "Blue Wizard") {
            activePlayer.innerText = "Red Wizard";
            changeColor();
        } else {
            activePlayer.innerText = "Blue Wizard";
            changeColor();
        }

    } else {
        // avec le parseInt on convertit les scores en Int et on les cumule à chaque lancer
        roundScore.innerText = parseInt(roundScore.innerText) + parseInt(diceRoll);
    }
});

// on crée une fonction pour transférer le score de la manche vers le score global du joueur
// (ici on soustrait en fait la valeur du round à celle de la barre de progrès = PV)
holdButton.addEventListener("click", holdScore);

function holdScore() {

    //si le joueur en cours est le joueur 1
    if(activePlayer.innerText == "Blue Wizard") {
        holdScorePl2.innerText = parseInt(holdScorePl2.innerText) - parseInt(roundScore.innerText);
        progressPl2.style.width = holdScorePl2.innerText + "%";
        activePlayer.innerText = "Red Wizard";
        changeColor();

    //si le joueur en cours est le joueur 2
    } else {
        holdScorePl1.innerText = parseInt(holdScorePl1.innerText) - parseInt(roundScore.innerText);
        progressPl1.style.width = holdScorePl2.innerText + "%";
        activePlayer.innerText = "Blue Wizard";
        changeColor();
    }
    
    // dans tous les cas, on remet le compteur de la manche à zéro
    roundScore.innerText = "0";

    // on change la couleur des barres suivant leur valeur
    if(parseInt(holdScorePl1.innerText) < 25) {
        progressPl1.style.backgroundColor = "red";
    } else if(parseInt(holdScorePl1.innerText) < 50) {
        progressPl1.style.backgroundColor = "orange";
    } else if(parseInt(holdScorePl1.innerText) < 75) {
        progressPl1.style.backgroundColor = "greenyellow";        
    } else {
        progressPl1.style.backgroundColor = "green";
    }

    if(parseInt(holdScorePl2.innerText) < 25) {
        progressPl2.style.backgroundColor = "red";
    } else if(parseInt(holdScorePl2.innerText) < 50) {
        progressPl2.style.backgroundColor = "orange";
    } else if(parseInt(holdScorePl2.innerText) < 75) {
        progressPl2.style.backgroundColor = "greenyellow";        
    } else {
        progressPl2.style.backgroundColor = "green";
    }


    // on empêche les barres d'aller au dessous de 0
    // et on déclare un vainqueur
    if(parseInt(holdScorePl1.innerText) <= 0) {
        alert("Red Wizard wins the battle!");
        endGame();
    }
    if(parseInt(holdScorePl2.innerText) <= 0) {
        alert("Blue Wizard wins the battle!");
        endGame();
    }

});


// une fonction pour recharger la page
newGame.addEventListener("click", () => {location.reload();});

// une fonction pour mettre fin au jeu
function endGame() {
    rollButton.removeEventListener("click", rollDice);
    holdButton.removeEventListener("click", holdScore);
}

// --- MODAL (Rules) ---

// on cible la modale
var modal = document.getElementById("myModal");

// on cible le bouton pour ouvrir la modale
var openModal = document.getElementById("rules");

// on cible le bouton pour fermer la modale
var closeModal = document.getElementsByClassName("close")[0];

// on ouvre la modale quand on clique sur le bouton correspondant
openModal.addEventListener("click", () => {
    modal.style.display = "block";
});

// on clique sur (X) pour fermer la modale
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// on ferme la modale quand on clique n'importe où en dehors
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});