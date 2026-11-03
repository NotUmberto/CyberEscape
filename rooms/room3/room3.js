let right_answers=0;

let response_span = document.getElementById("response");

let save_span = document.getElementById("save-photo");
let share_span = document.getElementById("share-photo");
let delete_span = document.getElementById("delete-photo");
let report_span = document.getElementById("report-photo");

let invite_span = document.getElementById("text-box-span");
let join_span = document.getElementById("text-box-span2");

function save_photo() {
    response_span.textContent = "NO! Salvare sul proprio dispositivo una foto privata di un'altra persona senza il suo consenso è un reato!";
    response_span.classList.remove("correct");
    response_span.classList.add("incorrect");
}

save_span.addEventListener("click", save_photo);

function share_photo() {
    response_span.textContent = "NO! Condividere una foto privata di un'altra persona senza il suo consenso è un reato! Non contribuire alla diffusione!";
    response_span.classList.remove("correct");
    response_span.classList.add("incorrect");
}

share_span.addEventListener("click", share_photo);

function delete_photo() {
    response_span.textContent = "CORRETTO! Eliminare una foto privata di un'altra persona senza il suo consenso è la scelta giusta! E' il primo passo per fermare la diffusione del contenuto!";
    response_span.classList.remove("incorrect");
    response_span.classList.add("correct");
    right_answers++;
}

delete_span.addEventListener("click", delete_photo);

function report_photo() {
    response_span.textContent = "CORRETTO! Segnalare una foto privata di un'altra persona senza il suo consenso è la scelta giusta! Segnalare il contenuto aiuta a fermarne la diffusione!";
    response_span.classList.remove("incorrect");
    response_span.classList.add("correct");
    right_answers++;
}

report_span.addEventListener("click", report_photo);

function invite_chat() {
    response_span.textContent = "GIUSTO! Invitare a cancellare il contenuto privato di un'altra persona senza il suo consenso è la scelta giusta! Cancellare il contenuto aiuta a fermarne la diffusione!";
    response_span.classList.remove("incorrect");
    response_span.classList.add("correct");
    right_answers++;
}

invite_span.addEventListener("click", invite_chat);

