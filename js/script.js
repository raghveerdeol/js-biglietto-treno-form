



const bottone = document.querySelector('button');


bottone.addEventListener('click', function () {
// Il numero di chilometri da percorrere 
let userDistance  = document.querySelector('div > input#userDistance');
// Età del passeggero 
let userAge = document.querySelector('div > input#userAge');
// prezzo del biglietto al km (0.267113 € al km) 
const kmPrice = userDistance.value * 0.267113;
let sconto = 0;
let price = 0;

if (userAge.value < 18) {
    // va applicato uno sconto del 24.552% per gli under 21 
    sconto = 24.552;
} else if (userAge.value >= 65 ){
    // va applicato uno sconto del 37.893% per gli over 63 
    sconto = 37.893;
} else {
    sconto = 0; 
}
price = kmPrice - ((kmPrice / 100) * sconto);


    console.log(userDistance.value, userAge.value,  kmPrice,  price)
})