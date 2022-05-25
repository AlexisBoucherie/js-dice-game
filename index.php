<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice game JS test</title>
    <link rel="stylesheet" href="style.css">
    <!-- Boostrap Icons CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">
</head>
<body>
    <header>
        <button id="rules"><i class="bi bi-info-circle"></i><p> RULES</p></button>
        <button id="newGame"><p>NEW GAME </p><i class="bi bi-arrow-clockwise"></i></button>
    </header>
    <main>
        <div class="upper-screen">

            <!-- Modal window -->
            <div id="myModal" class="modal">
                <div class="modal-content">
                <span class="close">&times;</span>
                <p>Each round, you roll dice to charge up your spell. If you think the power of the spell is high enough, you can release its energy to deal damages to your opponent.<br>
                    If you feel lucky, you can roll as many dice as you want, but be careful: if you roll a 1, your energy is lost and you fail your spell. Which means, it will be the turn of the other wizard.<br>
                    Upon reaching 0 HP, a wizard looses the battle.</p>
                </div>
            </div>


            <i id="dice-img"class="bi bi-question-square"></i>
            <div class="power" id="power">
                <div id="active-player">Blue Wizard</div>
                <div id="round">0</div>
                <p>Spell power</p>
            </div>
            <button id="rollMe">ROLL TO CHARGE</button>
            <button id="holdMe">RELEASE SPELL!</button>
        </div>
        <div class="lower-screen">
            <div class="player pl2">
                <div class="progress-bar">
                    <div id="progress-pl2"></div>
                </div>
                <p><span id="global-pl2">100</span>/100 HP - Red Wizard</p>
            </div>
            <div class="wizards">
                <img src="img/blue-wizard.png" class="pl1-img" alt="Player 1 - Blue Wizard">
                <img src="img/red-wizard.png" class="pl2-img" alt="Player 2 - Red Wizard">
            </div>
            <div class="player pl1">
                <div class="progress-bar">
                    <div id="progress-pl1"></div>
                </div>
                <p>Blue Wizard - <span id="global-pl1">100</span>/100 HP</p>
            </div>

        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>