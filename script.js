let room1=document.getElementById("room1");
let room2=document.getElementById("room2");
let room3=document.getElementById("room3");
let room4=document.getElementById("room4");
let room5=document.getElementById("room5");

function apriRoom1() { 
    window.location.href = "rooms/room1.html";
}
function apriRoom2() {
    window.location.href = "rooms/room2.html";
}
function apriRoom3() {
    window.location.href = "rooms/room3.html";
}
function apriRoom4() {
    window.location.href = "rooms/room4.html";
}
function apriRoom5() {
    window.location.href = "rooms/room5.html";
}

room1.addEventListener("click", apriRoom1);
room2.addEventListener("click", apriRoom2);
room3.addEventListener("click", apriRoom3);
room4.addEventListener("click", apriRoom4);
room5.addEventListener("click", apriRoom5);

let escapeButton = document.getElementById("escape-button");

//quando carichiamo il DOM controlliamo se il valore di room nella localstorage e' 5, se si allora abilitiamo il bottone escape
document.addEventListener("DOMContentLoaded", function() {
    let room = localStorage.getItem("room");

    //gestiamo il bottone
    if (room == null) { 
        localStorage.setItem("room", "0");
        escapeButton.disabled = true;
        escapeButton.classList.add("not-complete-button");
    } else if (room === "5") {
        escapeButton.disabled = false;
        escapeButton.classList.remove("not-complete-button");
    } else {
        escapeButton.disabled = true;
        escapeButton.classList.add("not-complete-button");
    }

    //gestiamo la scritta
    let escapeText = document.getElementById("escape-text");
    if (room === "5") {
        escapeText.textContent = "Complimenti! Hai completato tutte le stanze!";
    } else if (parseInt(room) > 0) { 
        escapeText.textContent = "Hai completato " + room + "/5.";
    }
    else {
        escapeText.textContent = "Completa tutte le stanze per sbloccare l'uscita!";
    }

    //controlliamo tutte le stanze dal loro valore nella localstorage
    if (localStorage.getItem("room1") === "true") {
        room1.classList.add("completed");
        //rendiamo non piu' cliccabile la stanza 1
        room1.removeEventListener("click", apriRoom1);
    }
    if (localStorage.getItem("room2") === "true") {
        room2.classList.add("completed");
        //rendiamo non piu' cliccabile la stanza 2
        room2.removeEventListener("click", apriRoom2);
    }
    if (localStorage.getItem("room3") === "true") {
        room3.classList.add("completed");
        //rendiamo non piu' cliccabile la stanza 3
        room3.removeEventListener("click", apriRoom3);
    }
    if (localStorage.getItem("room4") === "true") {
        room4.classList.add("completed");
        //rendiamo non piu' cliccabile la stanza 4
        room4.removeEventListener("click", apriRoom4);
    }
    if (localStorage.getItem("room5") === "true") {
        room5.classList.add("completed");
        //rendiamo non piu' cliccabile la stanza 5
        room5.removeEventListener("click", apriRoom5);
    }
});

//quando clicco controlla nella localstorage il valore room se e' 5
escapeButton.addEventListener("click", function() {
    let room = localStorage.getItem("room");
    if (room === "5") {
        window.location.href = "escape.html";
    }
});