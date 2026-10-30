let num_answer=0;

let img = document.getElementById("user-icon");
let points = document.getElementById("points");

function img_click() { 
    num_answer++;
    points.textContent=num_answer+"/7";
    document.removeEventListener(img,img_click); //una volta trovato non posso piu cliccarlo

    let comment=document.getElementById("comment");
    comment.textContent="Bravo/a! Ogni utente ufficiale ha una immagine profilo. Altrimenti sarebbe un falso."
}

img.addEventListener("click",img_click());

let notVerified = document.getElementById("user-not-verified");

notVerified.addEventListener("click", function() { 

})