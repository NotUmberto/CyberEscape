let score = 0;
let time = 2000; //2 secondi
let speed = 20;

let temp_time = time;
let temp_speed = speed;

let spawnInterval;
let spawnIntervalAngry;

let isPaused = false;
let isGameOver = false;

function calculateRandomPosition(width) {
    return Math.random() * (width - 100) + "px";
}

function loseGame() {
    //mostriamo il messaggio di sconfitta
    document.getElementById("lose-message").textContent = "Hai perso!";
    //fermiamo il gioco
    pauseGame();
    isGameOver = true;
}

function clickVirus(newvirus) {
    //rimuoviamo l'elemento dal div
    var div = document.querySelector(".space");
    div.removeChild(newvirus);
    //aggiungiamo il punteggio allo score
    if (newvirus.dataset.type === "virus") {
        score += 1;
    } else if (newvirus.dataset.type === "angry") {
        score += 3;
    }
    if (score % 4 === 0) {
        time -= 250; //diminuiamo il tempo di 0.2 secondi
        speed+= 5; //aumentiamo la velocità di 5px
    }
    document.getElementById("score-value").textContent = score;
}

function avviaGenerazione() {
    //ogni 2 secondi
    spawnInterval = setInterval(function() {
        //prendiamo la grandezza del div
        var div = document.querySelector(".space");
        var width = div.offsetWidth;
        var height = div.offsetHeight;

        //creiamo un nuovo elemento
        var newvirus = document.createElement("img");
        newvirus.src = "../../icons/virus.png";
        
        newvirus.style.position = "absolute";
        newvirus.style.left = calculateRandomPosition(width);
        newvirus.style.top = "0px";
        newvirus.style.width = "120px";
        newvirus.style.height = "90px";
        newvirus.dataset.type = "virus";

        newvirus.addEventListener("click", function() {
            if (!isPaused)
                clickVirus(newvirus);
        });

        //aggiungiamo l'elemento al div
        div.appendChild(newvirus);

        //ogni 0.2 secondi scende di speed px
        let fallInterval = setInterval(function() { 
            newvirus.style.top = parseInt(newvirus.style.top) + speed + "px";
            if (parseInt(newvirus.style.top) > height) {
                //rimuoviamo l'elemento dal DOM
                if (div.contains(newvirus)) {
                    div.removeChild(newvirus);
                    //fermiamo l'intervallo
                    clearInterval(fallInterval);
                    //togliamo il punteggio dallo score
                    score -= 1;
                    if (score < 0) {
                        //hai perso, fermiamo il gioco e resettiamo lo score
                        loseGame();
                    }
                    document.getElementById("score-value").textContent = score;
                }
            }
        }, 200);
    }, time);
}

addEventListener("DOMContentLoaded", function() {
    avviaGenerazione();
    avviaGenerazioneAngry();
});


function avviaGenerazioneAngry() {
    //ogni 3 secondi
    spawnIntervalAngry = setInterval(function() {
        if (score % 4 === 0 && score > 20) {
            //prendiamo la grandezza del div
            var div = document.querySelector(".space");
            var width = div.offsetWidth;
            var height = div.offsetHeight;

            //creiamo un nuovo elemento
            var newvirus = document.createElement("img");
            newvirus.src = "../../icons/virus2.png";
            newvirus.style.position = "absolute";
            newvirus.style.left = calculateRandomPosition(width);
            newvirus.style.top = "0px";
            newvirus.style.width = "120px";
            newvirus.style.height = "90px";
            newvirus.dataset.type = "angry";

            newvirus.addEventListener("click", function() {
                if (!isPaused) {
                    clickVirus(newvirus);
                }
            });

            //aggiungiamo l'elemento al div
            div.appendChild(newvirus);

            //ogni 0.2 secondi scende di speed px
            let fallInterval = setInterval(function() { 
                newvirus.style.top = parseInt(newvirus.style.top) + speed*1.15 + "px";
                if (parseInt(newvirus.style.top) > height) {
                    //rimuoviamo l'elemento dal DOM
                    if (div.contains(newvirus)) {
                        div.removeChild(newvirus);
                        //fermiamo l'intervallo
                        clearInterval(fallInterval);
                        //togliamo il punteggio dallo score
                        score -= 1;
                        if (score < 0) {
                            //hai perso, fermiamo il gioco e resettiamo lo score
                            loseGame();
                        }
                        document.getElementById("score-value").textContent = score;
                    }
                }
            }, 200);
        }
    }, 3000);
}

function pauseGame() {
    if (isPaused) return; // Se il gioco è già in pausa, non fare nulla
    
    isPaused = true;
    temp_time = time;
    temp_speed = speed;

    speed = 0;
    
    clearInterval(spawnInterval);
    clearInterval(spawnIntervalAngry);
}

document.getElementById("pause").addEventListener("click", function() {
    pauseGame();
});

function resumeGame() {
    if (!isPaused) return; // Se il gioco non è in pausa, non fare nulla
    if (isGameOver) {
        resetGame();
        return; // Se il gioco è finito, non fare nulla
    }

    isPaused = false;
    time = temp_time;
    speed = temp_speed;

    avviaGenerazione();
    avviaGenerazioneAngry();
}

document.getElementById("resume").addEventListener("click", function() {
    resumeGame();
});

function resetGame() {
    isPaused = false;
    isGameOver = false;

    temp_time = 2000;
    temp_speed = 20;
    score = 0;
    time = 2000;
    speed = 20;
    document.getElementById("score-value").textContent = score;
    //cancelliamo tutti gli elementi presenti nel div
    var div = document.querySelector(".space");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    //fermiamo l'intervallo
    clearInterval(spawnInterval);
    clearInterval(spawnIntervalAngry);
    //riprendiamo il gioco
    avviaGenerazione();
    avviaGenerazioneAngry();
}

document.getElementById("reset").addEventListener("click", resetGame);

document.getElementById("home").addEventListener("click", function() {
    window.location.href = "../../index.html";
});