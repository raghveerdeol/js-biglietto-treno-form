

// Il numero di chilometri da percorrere 
const userDistance = prompt('Inserire la distanza da percorere');
// Età del passeggero 
const userAge = prompt('Inserire l\'età del passeggero');
// prezzo del biglietto al km (0.267113 € al km) 
const kmPrice = userDistance * 0.267113;
let sconto = 0;
let price = 0;
if (userAge < 18) {
    // va applicato uno sconto del 24.552% per gli under 21 
    sconto = 24.552;
} else if (userAge >= 65 ){
    // va applicato uno sconto del 37.893% per gli over 63 
    sconto = 37.893;
} else {
    sconto = 0; 
}
price = kmPrice - ((kmPrice / 100) * sconto);

console.log(price);
