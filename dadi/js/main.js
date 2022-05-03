// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


const btnPlay= document.querySelector("#play")
const btnReset= document.querySelector("#reset")

// dati giocatore
const playerScore= document.querySelector(".player__score")
const playerDice= document.querySelector(".player__dice")
const playerWin= document.querySelector(".player__win")
// dati pc
const pcScore= document.querySelector(".pc__score")
const pcDice= document.querySelector(".pc__dice")
const pcWin= document.querySelector(".pc__win")

function roll6(){
    return Math.floor(Math.random() * 6) + 1;
}

let scorePlayer=0;
let scorePC=0;

btnPlay.addEventListener("click", 
    function(){
        const dicePlayer = roll6();
        const dicePC = roll6();

        playerDice.innerHTML= dicePlayer;
        pcDice.innerHTML= dicePC;

        if(dicePlayer>dicePC){
            scorePlayer++;
            playerWin.innerHTML="WIN";
            pcWin.innerHTML="LOSE"
        }else if (dicePlayer<dicePC){
            scorePC++;
            playerWin.innerHTML="LOSE";
            pcWin.innerHTML="WIN"
        }else{
            console.log("pareggio");
            playerWin.innerHTML="TIE";
            pcWin.innerHTML="TIE"
        }
        playerScore.innerHTML=scorePlayer;
        pcScore.innerHTML=scorePC;
    }
)

btnReset.addEventListener("click",
    function(){
        scorePC=0;
        scorePlayer=0;
        playerScore.innerHTML=scorePlayer;
        pcScore.innerHTML=scorePC;
    }
)

