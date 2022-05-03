// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const btnPlay= document.querySelector("#play")
const btnReset= document.querySelector("#reset")

function roll6(){
    return Math.floor(Math.random() * 6) + 1;
}

let scorePlayer=0;
let scorePC=0;

btnPlay.addEventListener("click", 
    function(){
        const dicePlayer = roll6();
        const dicePC = roll6();

        if(dicePlayer>dicePC){
            scorePlayer++;
        }else if (dicePlayer<dicePC){
            scorePC++;
        }else{
            console.log("pareggio");
        }
        console.log(scorePlayer , scorePC)
    }
)

btnReset.addEventListener("click",
    function(){
        scorePC=0;
        scorePlayer=0;
    }
)

