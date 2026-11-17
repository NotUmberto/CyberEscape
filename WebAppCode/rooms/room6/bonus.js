let score = 0;
let time = 2000; //2 secondi

addEventListener("DOMContentLoaded", function() {
    //ogni 2 secondi
    setInterval(function() {
        //prendiamo la grandezza del div
        var div = document.querySelector(".space");
        var width = div.offsetWidth;
        var height = div.offsetHeight;

        //creiamo un nuovo elemento
        var newvirus = document.createElement("img");
        newvirus.src = "../../../icons/virus.svg";
        
        newvirus.style.position = "absolute";
        newvirus.style.left = Math.random() * (width - 50) + "px";
        newvirus.style.top = "0px";
        newvirus.style.width = "50px";
        newvirus.style.height = "50px";
        
        newvirus.addEventListener("click", function() {
            //rimuoviamo l'elemento dal div
            div.removeChild(newvirus);
            //aggiungiamo il punteggio allo score
            score += 1;
            if (score % 5 === 0) {
                time -= 200; //diminuiamo il tempo di 0.2 secondi
            }
            document.getElementById("score-value").textContent = score;
        }); 

        //aggiungiamo l'elemento al div
        div.appendChild(newvirus);

        //ogni 0.2 secondi scende di 10px
        let fallInterval = setInterval(function() { 
            newvirus.style.top = parseInt(newvirus.style.top) + 40 + "px";
            if (parseInt(newvirus.style.top) > height) {
                //rimuoviamo l'elemento dal DOM
                if (div.contains(newvirus)) {
                    div.removeChild(newvirus);
                    //fermiamo l'intervallo
                    clearInterval(fallInterval);
                    //togliamo il punteggio dallo score
                    score -= 1;
                    document.getElementById("score-value").textContent = score;
                }
            }
        }, 200);
    }, time);
});