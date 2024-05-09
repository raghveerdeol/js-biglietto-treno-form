/* Scrivere un programma che chieda all’utente:
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il 
va applicato uno sconto del 24.552% per gli under 21
va applicato uno sconto del 37.893% per gli over 63. */

// Il numero di chilometri da percorrere 
const userDistance = prompt('Inserire la distanza da percorere');
// Età del passeggero 
const userAge = prompt('Inserire l\'età del passeggero');
// prezzo del biglietto al km (0.267113 € al km) 
const kmPrice = 0.267113;
let sconto = 0;
let price = 0;
if (userAge < 18) {
    
} else if (userAge >= 65 ){
    
} else {

}

