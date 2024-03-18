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
    let counterSection = document.querySelector(`#counter-wrapper`)
    counterSection.innerHTML = ` `;
    
    
    //array di numeri random
    let randomArr = getRndInteger(1, 100, 16);
    console.log(randomArr);

    //punteggio del gioco
    let gameScore = 0
    

    
    //stampare un tipo di griglia in base alla difficoltà del gioco
    if(selectLevel === `easy`) {
        let gameCounter = generateCounter(gameScore)
        counterSection.append(gameCounter)
        //generare una griglia di 100 elementi con numeri da 1 a 100
        let newSquare
        for(let i = 1; i <= 100; i++){
            newSquare = generateSquare (i);
            boxContainer.append(newSquare);
            newSquare.addEventListener(`click`, function(){
                let gameResult = clickEvent(randomArr, i)
                console.log(gameResult);
                this.classList.add(gameResult)
                if(gameResult === `click-cell-continue`){
                    gameScore ++;
                    gameCounter.innerHTML = ``;
                    gameCounter.innerHTML += `<span>Score: ${gameScore}</span>`
                }   else {
                    boxContainer.innerHTML = ` `;
                    let gameFinish = gameOver (gameScore);
                    boxContainer.append(gameFinish);
                }
            })
        }
    } else if (selectLevel === `hard`){
        let gameCounter = generateCounter(gameScore);
        counterSection.append(gameCounter);

        let newSquare
        for(let i = 1; i <= 81; i++){
            newSquare = generateSquare (i);
            newSquare.classList.add(`hard-box`);
            boxContainer.append(newSquare);
            newSquare.addEventListener(`click`, function(){
                let gameResult = clickEvent(randomArr, i)
                console.log(gameResult);
                this.classList.add(gameResult)
                if(gameResult === `click-cell-continue`){
                    gameScore ++;
                    gameCounter.innerHTML = ``;
                    gameCounter.innerHTML += `<span>Score: ${gameScore}</span>`
                } else {
                    boxContainer.innerHTML = ` `;
                    let gameFinish = gameOver (gameScore);
                    boxContainer.append(gameFinish);
                }
            })
        }
    } else if (selectLevel === `crazy`){
        let gameCounter = generateCounter(gameScore);
        counterSection.append(gameCounter);

        let newSquare
        for(let i = 1; i <= 49; i++){
            newSquare = generateSquare (i);
            newSquare.classList.add(`crazy-box`);
            boxContainer.append(newSquare);
            newSquare.addEventListener(`click`, function(){
                let gameResult = clickEvent(randomArr, i)
                console.log(gameResult);
                this.classList.add(gameResult)
                if(gameResult === `click-cell-continue`){
                    gameScore ++;
                    gameCounter.innerHTML = ``;
                    gameCounter.innerHTML += `<span>Score: ${gameScore}</span>`
                } else {
                    boxContainer.innerHTML = ` `;
                    let gameFinish = gameOver (gameScore);
                    boxContainer.append(gameFinish);
                }
            })
        }
    }
    
})



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

function generateCounter(number){
    let counter = document.createElement(`div`);
    counter.classList.add(`counter`);
    counter.innerHTML += `<span>Score: ${number}</span>`
    return counter
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
//funzione che legge l'array
//array --> inserire la variabile dell'array da leggere
//number --> inserire l'indice dell'array da confrontare
//ritorna nome della classe da aggiungere alla cella
function clickEvent(arrayName, number){
    let classAdd
    if(arrayName.includes(number)){
        classAdd = `click-cell-over`
    } else {
        classAdd = `click-cell-continue`
    }

    return classAdd
}

function gameOver (number){
    let overContainer = document.createElement(`div`);
    overContainer.classList.add(`container-over`);
    overContainer.innerHTML += `<h1>Game Over, hai totalizzato: ${number} punti</h1>`;
    return overContainer
}
//processo

//se clicco su una casella e il numero di quet'ultima è presente nell'array (.includes) allora casella rossa e game over
//se non è un numero dell'array aggiungo classe click-cell-continue e aggiungo 1 alla variabile contatore del punteggio che stampo in un angolo
