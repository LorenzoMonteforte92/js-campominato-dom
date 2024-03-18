// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta:le bombe. 
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
// perciò nell’array delle bombe non potranno esserci due numeri uguali.

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - 
// la cella si colora di rosso e la partita termina. 
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
// (ovvero quando ha rivelato tutte le celle che non sono bombe).

// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

//selezionare il bottone nel DOM e inserirlo in una variabile
//metterlo in attesa di un evento click
let startBtn = document.querySelector(`#btn`);
startBtn.addEventListener(`click`, function(){
    let boxContainer = document.querySelector(`#container`);
    boxContainer.innerHTML = ` `;
    let selectLevel = document.querySelector(`#livello`).value;
    
    //stampare un tipo di griglia in base alla difficoltà del gioco
    if(selectLevel === `easy`) {
        //generare una griglia di 100 elementi con numeri da 1 a 100
        
        //stamparci dentro gli elementi usando una funzione
        let newSquare
        for(let i = 1; i <= 100; i++){
            newSquare = generateSquare (i);
            boxContainer.append(newSquare);
            newSquare.addEventListener(`click`, function(){
                this.classList.add(`click-cell`)
                console.log(i)
            })
        }
} else if (selectLevel === `hard`){
        let newSquare
        for(let i = 1; i <= 81; i++){
            newSquare = generateSquare (i);
            newSquare.classList.add(`hard-box`);
            boxContainer.append(newSquare);
            newSquare.addEventListener(`click`, function(){
                this.classList.add(`click-cell`)
                console.log(i)
            })
        }
} else if (selectLevel === `crazy`){
        let newSquare
        for(let i = 1; i <= 49; i++){
            newSquare = generateSquare (i);
            newSquare.classList.add(`crazy-box`);
            boxContainer.append(newSquare);
            newSquare.addEventListener(`click`, function(){
                this.classList.add(`click-cell`)
                console.log(i)
            })
        }
    }
    
})

let random = getRndInteger(1, 100, 16);
console.log(random);

// ----------------
//     FUNCTIONS
// ----------------

//funzione che genera un quadrato
//number --> numero all'interno dei quadrati
//return: un elemento del DOM che rappresenta un quadrato
function generateSquare (number){
    let square = document.createElement(`div`);
    square.classList.add(`box`);
    square.innerHTML += `<span>${number}</span>`
    return square
}

//funzione che genera un numero random
//min --> numero random da cui parte il range 
//max --> numero random massimo a cui arriva il range
//number --> limite massimo di numeri random da generare
//return: array di numeri random senza doppioni
function getRndInteger(min, max, number) {
    let randomList = []
    for (let i = 1; i <= number; i++){
        randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;
        if(!randomList.includes(randomNum)){
            randomList.push(randomNum)
        } else{
            randomList.push(randomNum)
        }
        
    }
    return randomList
    
  }

function changeColorClick (){

}
