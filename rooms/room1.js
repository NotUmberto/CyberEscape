let num_right=0;

let homeButton = document.getElementById("home");
homeButton.disabled = true;

let checkButton = document.getElementById("check-password");
checkButton.disabled = false;

let userPassword = document.getElementById("user-password");

checkButton.addEventListener("click", function() {
    let password = userPassword.value;
    if (controllaPassword(password)) {
        localStorage.setItem("room", (parseInt(localStorage.getItem("room")) + 1));
        localStorage.setItem("room1", "true");
        homeButton.disabled = false;
        checkButton.disabled = true;
    } else { 
        let passwordFeedback = document.getElementById("password-feedback");
        passwordFeedback.textContent = "La password non e' valida!";
    }
});

homeButton.addEventListener("click", function() {
    window.location.href = "../main.html";
});

let passwordList = document.getElementById("passwords-list");

passwordList.addEventListener("click", function(event) {
    //controlliamo che sia un input button quello cliccato
    if (event.target.tagName === "INPUT" && event.target.type === "button") {
        console.log("Bottone cliccato: " + event.target.value);
        //controlliamo da quale div proviene (password-divn)
        let divId = event.target.parentElement;
        if (event.target.value === "Sbagliato") {
            console.log("Sbagliato");
            let question = divId.id.slice(-1);
            document.getElementById("result" + divId.id.slice(-1)).textContent = "CORRETTO!";
            //disattiviamo entrambi i bottoni
            document.getElementById("corretto" + question).disabled = true;
            document.getElementById("sbagliato" + question).disabled = true;
        } else { 
            //qua gli diciamo che cosa ha sbagliato

        }
    }
});

function controllaPassword(password) {
    if (typeof password !== "string") {
        return false;
    }

    return password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9\s]/.test(password);
}