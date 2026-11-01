let homeButton = document.getElementById("home-button");
homeButton.disabled=true;

let consentiButton = document.getElementById("Consenti");
let negaButton = document.getElementById("Nega");

let titolo = document.getElementById("titolo");

function attendiScelta() { 
    return new Promise(function(resolve) {

        function scegli(event) { 
            resolve(event.target.id);

            consentiButton.removeEventListener("click", scegli);
            negaButton.removeEventListener("click", scegli);
        }

        consentiButton.addEventListener("click", scegli);
        negaButton.addEventListener("click", scegli);
    });
}

async function permissions() {
    console.log("Inizio del quiz sulle autorizzazioni delle app");

    let icon = document.getElementById("icon");

    titolo.innerHTML = "Consentire a <b>WhatsApp</b> di accedere alla fotocamera e al microfono?";

    let risultato = document.getElementById("risultato");

//------------per le animazioni (fatto con l'ai)---------------
    let feedbackObserver = new MutationObserver(function() {
        risultato.classList.remove("feedback-animazione");
        void risultato.offsetWidth;
        risultato.classList.add("feedback-animazione");
    });

    feedbackObserver.observe(risultato, { childList: true });
//-------------------------------------------------------------    

    while (true) {
        let scelta = await attendiScelta();
        if (scelta === "Consenti") {
            risultato.textContent = "Giusto! E' normale che WhatsApp chieda l'accesso alla fotocamera e al microfono, altrimenti non potresti fare videochiamate o inviare foto e video!";
            risultato.classList.remove("incorrect");
            risultato.classList.add("correct");
            break;
        } else {
            risultato.textContent = "Sbagliato! E' normale che WhatsApp chieda l'accesso alla fotocamera e al microfono, altrimenti non potresti fare videochiamate o inviare foto e video!";
            risultato.classList.remove("correct");
            risultato.classList.add("incorrect");
        }
    }

    icon.src = "../icons/calculator.jpg";

    titolo.innerHTML = "Consentire a <b>Calcolatrice</b> di accedere alla memoria del dispositivo?";

    while (true) {
        let scelta = await attendiScelta();
        if (scelta === "Nega") {
            risultato.textContent = "Giusto! Non ha senso che un'applicazione come la calcolatrice abbia bisogno di accedere alla memoria del dispositivo!";
            risultato.classList.remove("incorrect");
            risultato.classList.add("correct");
            break;
        } else {
            risultato.textContent = "Sbagliato! Non ha senso che un'applicazione come la calcolatrice abbia bisogno di accedere alla memoria del dispositivo!";
            risultato.classList.remove("correct");
            risultato.classList.add("incorrect");
        }
    }


    icon.src = "../icons/googlemaps.webp";

    titolo.innerHTML = "Consentire a <b>Google Maps</b> di accedere alla posizione del dispositivo?";
    while (true) {
        let scelta = await attendiScelta();
        if (scelta === "Consenti") {
            risultato.textContent = "Giusto! E' normale che Google Maps chieda l'accesso alla posizione del dispositivo, altrimenti non potresti ricevere indicazioni stradali!";
            risultato.classList.remove("incorrect");
            risultato.classList.add("correct");
            break;
        } else {
            risultato.textContent = "Sbagliato! Google Maps ha bisogno di accedere alla posizione del dispositivo per fornirti le indicazioni stradali!";
            risultato.classList.remove("correct");
            risultato.classList.add("incorrect");
        }
    }

    icon.src = "../icons/browser.jpg";

    titolo.innerHTML = "Consentire a <b>Browser</b> di accedere alla rubrica del dispositivo?";
    while (true) {
        let scelta = await attendiScelta();
        if (scelta === "Nega") {
            risultato.textContent = "Giusto! Non ha senso che un'applicazione come il browser abbia bisogno di accedere alla rubrica del dispositivo!";
            risultato.classList.remove("incorrect");
            risultato.classList.add("correct");
            break;
        } else {
            risultato.textContent = "Sbagliato! Non ha senso che un'applicazione come il browser abbia bisogno di accedere alla rubrica del dispositivo!";
            risultato.classList.remove("correct");
            risultato.classList.add("incorrect");
        }
    }

    icon.src = "../icons/spotify.webp";

    titolo.innerHTML = "Consentire a <b>Spotify</b> di accedere alla memoria del dispositivo?";
    while (true) {
        let scelta = await attendiScelta();
        if (scelta === "Consenti") {
            risultato.textContent = "Giusto! E' normale che Spotify chieda l'accesso alla memoria del dispositivo, altrimenti non potresti ascoltare la musica offline!";
            risultato.classList.remove("incorrect");
            risultato.classList.add("correct");
            break;
        } else {
            risultato.textContent = "Sbagliato! Spotify ha bisogno di accedere alla memoria del dispositivo per permetterti di ascoltare la musica offline!";
            risultato.classList.remove("correct");
            risultato.classList.add("incorrect");
        }
    }

    let risultato2 = document.getElementById("risultato2");
    // Mostriamo il messaggio di completamento del quiz
    risultato2.style.display = "block";
    risultato2.textContent = " Complimenti! Hai risposto correttamente a tutte le domande!";
    homeButton.disabled = false;
    localStorage.setItem("room", (parseInt(localStorage.getItem("room")) + 1));
    localStorage.setItem("room5", "true");
}

permissions();

homeButton.addEventListener("click", function() {
    window.location.href = "../main.html";
});