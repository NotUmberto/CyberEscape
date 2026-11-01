let newsDiv = document.getElementById("news-div");
let num_rightAnswers = 0;

let rightAnswers = {
    "notizia1": "Vera",
    "notizia2": "Falsa",
    "notizia3": "Falsa",
    "notizia4": "Falsa",
    "notizia5": "Vera"
};

let homeButton = document.getElementById("home-button");
homeButton.disabled = true;

homeButton.addEventListener("click", function() {
    window.location.href = "../main.html";
});

function checkAllAnswers() {
    if (num_rightAnswers === 5) {
        homeButton.disabled = false;
        localStorage.setItem("room", (parseInt(localStorage.getItem("room")) + 1));
        localStorage.setItem("room4", "true");
        document.getElementById("result").textContent = "Complimenti! Hai risposto correttamente a tutte le notizie!";
    }
}

newsDiv.addEventListener("click", function() {
    let button = event.target;
    if (button.tagName === "INPUT" && button.type === "button") {
        let newsId = button.parentElement.id.slice(-1);
        let answer = button.value;
        let response = document.getElementById("risposta" + newsId);
        if (answer === rightAnswers["notizia" + newsId]) {
            response.textContent = "Risposta corretta!";
            switch (newsId) {
                case "1":
                    response.textContent += " Mettere lo smartphone sotto il cuscino mentre è in carica può essere pericoloso! Fate attenzione a dove caricate il vostro smartphone!";
                    break;
                case "2":
                    response.textContent += " Il 5G non causa il Coronavirus! Non c'e' correlazione tra le due cose! Controllate sempre le fonti, devono essere attendibili!";
                    break;
                case "3":
                    response.textContent += " Pensate sempre a quanto possano essere credibili certe notizie quando leggete!";
                    break;
                case "4":
                    response.textContent += " NON fatelo MAI! Potreste danneggiarlo e rischiare di farvi male! Questo fa capire quanto possano essere pericolose certe notizie. Per questo fate sempre attenzione a distinguere le notizie vere da quelle false!";
                    break;
                case "5":
                    response.textContent += " Putroppo e' vero. L'uso di uno screen-timer puo' aiutare a limitare il tempo passato sui social e ridurre lo stress!";
                    break;
            }
            response.classList.add("correct");
            //disattiviamo etrambi i bottoni
            let button1 = document.getElementById("vera" + newsId);
            let button2 = document.getElementById("falsa" + newsId);
            button1.disabled = true;
            button2.disabled = true;
            num_rightAnswers++;
            checkAllAnswers();
        } else { 
            response.textContent = "Risposta sbagliata!";
            response.classList.add("incorrect");
        }
    }
});
