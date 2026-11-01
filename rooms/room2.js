let num_answer=0;

let homeButton=document.getElementById("home-button");
//lo disabilitiamo all'inizio
homeButton.disabled=true;

let img = document.getElementById("user-icon");
let points = document.getElementById("points");

function img_click() { 
    num_answer++;
    points.textContent=num_answer+"/6";
    img.removeEventListener("click",img_click); //una volta trovato non posso piu cliccarlo

    let comment=document.getElementById("comment");
    comment.textContent="Bravo/a! Ogni utente ufficiale ha una immagine profilo. Altrimenti sarebbe un falso."
    checkEnd();
}

img.addEventListener("click",img_click);

let notVerified = document.getElementById("user-not-verified");

function not_verified_click() { 
    num_answer++;
    points.textContent=num_answer+"/6";
    notVerified.removeEventListener("click",not_verified_click); //una volta trovato non posso piu cliccarlo

    let comment=document.getElementById("comment");
    comment.textContent="Bravo/a! Ogni utente ufficiale ha un account verificato. Altrimenti potrebbe essere un falso."
    checkEnd();
}

notVerified.addEventListener("click", not_verified_click);

let wrongWord = document.getElementById("wrong-word");

function wrong_word_click() { 
    num_answer++;
    points.textContent=num_answer+"/6";
    wrongWord.removeEventListener("click",wrong_word_click); //una volta trovato non posso piu cliccarlo

    let comment=document.getElementById("comment");
    comment.textContent="Bravo/a! In questa mail c'è un errore di ortografia. Gli utenti ufficiali non commettono errori di ortografia."
    checkEnd();
}

wrongWord.addEventListener("click", wrong_word_click);

let fakeLink = document.getElementById("fake-link");

function fake_link_click() { 
    num_answer++;
    points.textContent=num_answer+"/6";
    fakeLink.removeEventListener("click",fake_link_click); //una volta trovato non posso piu cliccarlo

    let comment=document.getElementById("comment");
    comment.innerHTML+="Bravo/a! In questa mail c'è un link sospetto. Gli utenti ufficiali non inviano link sospetti. <br> Consiglio: per capire se un link e' vero guarda il nome prima dell'ultimo punto (.) e non dopo. Ad esempio: https://www.gogle.verifica.account.com/ e' un link falso perche' il nome prima dell'ultimo punto e' 'account' e non 'google'!.";
    checkEnd();
}

fakeLink.addEventListener("click", fake_link_click);

let warning = document.getElementById("warning");

function warning_click() { 
    num_answer++;
    points.textContent=num_answer+"/6";
    warning.removeEventListener("click",warning_click); //una volta trovato non posso piu cliccarlo

    let comment=document.getElementById("comment");
    comment.innerHTML="Bravo/a! In questa mail c'è un messaggio di minaccia. Gli utenti ufficiali non inviano messaggi di minaccia e non mettono mai fretta.";
    checkEnd();
}

warning.addEventListener("click", warning_click);

let mailFrom = document.getElementById("mail-from");

function mail_from_click() { 
    num_answer++;
    points.textContent=num_answer+"/6";
    mailFrom.removeEventListener("click",mail_from_click); //una volta trovato non posso piu cliccarlo

    let comment=document.getElementById("comment");
    comment.innerHTML="Ottimo! In questa mail c'è un mittente sospetto. Gli utenti ufficiali specificano sempre il loro nome e non solo l'indirizzo mail.";
    checkEnd();
}

mailFrom.addEventListener("click", mail_from_click);

function checkEnd() {
    if(num_answer==6){
        let endMessage=document.getElementById("end-message");
        endMessage.textContent="Complimenti! Hai trovato tutti gli indizi! Ora puoi passare alla stanza successiva.";
        endMessage.classList.remove("notfinished");
        homeButton.disabled=false;
        localStorage.setItem("room2", "true");
        localStorage.setItem("room", (parseInt(localStorage.getItem("room")) + 1));
    }
}