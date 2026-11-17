let score = 0;

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
            document.getElementById("score-value").textContent = score;
        }); 

        //aggiungiamo l'elemento al div
        div.appendChild(newvirus);

        //ogni 0.2 secondi scende di 10px
        setInterval(function() { 
            newvirus.style.top = parseInt(newvirus.style.top) + 10 + "px";
            if (parseInt(newvirus.style.top) > height) {
                div.removeChild(newvirus);
                //togliamo il punteggio dallo score
                score -= 1;
                document.getElementById("score-value").textContent = score;
            }
        }, 200);
    }, 2000);
});