// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const mail =["test@gmail.it","admin@gmail.it","alan@gmail.it"]
const mailUtente = prompt("Inserisci la tua mail")
let controllore=false;
for(let i =0; i<mail.length ; i++){
    if (mailUtente===mail[i]){
        controllore=true;
    }
}

const container= document.querySelector(".container");
const element= document.createElement("h1")
container.append(element)

if(controllore){
    alert("mail presente")
    element.innerHTML = "Accesso Consentito"
} else {
    alert("mail inserita nel archivio")
    element.innerHTML = "Accesso Consentito"
}