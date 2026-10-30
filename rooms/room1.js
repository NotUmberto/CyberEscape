let num_right=0;

let homeButton = document.getElementById("home");
homeButton.disabled = true;

let checkButton = document.getElementById("check-password");
checkButton.disabled = false;

let userPassword = document.getElementById("user-password");

checkButton.addEventListener("click", function() {
    let password = userPassword.value;
    let passwordFeedback = document.getElementById("password-feedback");

    if (controllaPassword(password)) {
        localStorage.setItem("room", (parseInt(localStorage.getItem("room")) + 1));
        localStorage.setItem("room1", "true");
        num_right++;
        if (num_right == 5) {
            homeButton.disabled = false;
            checkButton.disabled = true;
        } else { 
            checkButton.disabled = true;
        }
        passwordFeedback.textContent = "La password e' valida!";
        passwordFeedback.classList.remove("invalid");
        passwordFeedback.classList.add("valid");
    } else { 
        passwordFeedback.textContent = "La password non e' valida!";
        passwordFeedback.classList.remove("valid");
        passwordFeedback.classList.add("invalid");
    }
});

homeButton.addEventListener("click", function() {
    window.location.href = "../main.html";
});

let passwordList = document.getElementById("passwords-list");
let risposteCorrette = {
    "1": "Sbagliato",
    "2": "Sbagliato",
    "3": "Sbagliato",
    "4": "Sbagliato"
};

passwordList.addEventListener("click", function(event) {
    //controlliamo che sia un input button quello cliccato
    if (event.target.tagName === "INPUT" && event.target.type === "button") {
        console.log("Bottone cliccato: " + event.target.value);
        //controlliamo da quale div proviene (password-divn)
        let divId = event.target.parentElement;
        let question = divId.id.slice(-1);
        let resultDiv = document.getElementById("result" + question);
        let rispostaCorretta = event.target.value === risposteCorrette[question];

        if (rispostaCorretta) {
            console.log("Sbagliato");
            resultDiv.textContent = "CORRETTO!";
            resultDiv.classList.remove("incorrect");
            resultDiv.classList.add("correct");
            //disattiviamo entrambi i bottoni
            document.getElementById("corretto" + question).disabled = true;
            document.getElementById("sbagliato" + question).disabled = true;
            num_right++;
            if (num_right == 5) {
                homeButton.disabled = false;
                checkButton.disabled = true;
            }
        } else { 
            //qua gli diciamo che cosa ha sbagliato
            resultDiv.classList.remove("correct");
            resultDiv.classList.add("incorrect");
            switch (question) {
                case "1":
                    resultDiv.textContent = "La password deve contenere almeno 8 caratteri!";
                    break;
                case "2":
                    resultDiv.textContent = "La password deve contenere almeno un carattere speciale!";
                    break;
                case "3":
                    resultDiv.textContent = "La password deve contenere almeno un numero!";
                    break;
                case "4":
                    resultDiv.textContent = "La password deve contenere almeno una lettera maiuscola!";
                    break;
            }
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