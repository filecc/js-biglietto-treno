/* 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

*/

// variabili dichiarate

const kmToDo = parseInt(prompt("Quanti kilometri vuoi percorrere?")),
  age = parseInt(prompt("Quanti anni hai?")),
  euroKm = 0.21,
  overDiscount = 0.4,
  under18Discont = 0.2;

// calcoliamo il prezzo base senza sconti

let price = (euroKm * kmToDo).toFixed(2);

/* Math.round(((kmToDo * euroKm) + Number.EPSILON) * 100) / 100; */

// dichiariamo la variabile per il prezzo scontato
let finalPrice = 0;

// variabile per indicare se mostrare i dati o no
const dataToShow = (document.getElementById("data").innerHTML = `
            <ul class='list-unstyled'>
                <li>Et&agrave;: ${age}</li>
                <li>Km da percorrere: ${kmToDo}</li>
            </ul>
`);

if (
  isNaN(age) ||
  parseInt(age) < 12 ||
  isNaN(kmToDo) ||
  parseInt(kmToDo) <= 0
) {
  document.getElementById("cost").innerHTML = `
            <p class="p-3 m-0 text-danger fw-bold">  
            I dati inseriti non sono corretti: riprova.
            </p>
    `;
  document.getElementById("data").innerHTML = `
    <p class="text-center text-danger fw-bold">Errore</p>`;
} else if (age > 18 && age < 65) {
  document.getElementById("cost").innerHTML = `
            <p class="p-3 m-0 text-success fw-bold h1">  
            ${price}€
            </p>
    `;
  document.getElementById("data").innerHTML = dataToShow;
} else if (age <= 18 && age > 12) {
  finalPrice = (price - price * under18Discont).toFixed(2);
  document.getElementById("cost").innerHTML = `
<p class="p-3 m-0 text-success fw-bold h1">  
${finalPrice}€
</p>
`;
  document.getElementById("data").innerHTML = dataToShow;
} else if (age >= 65 && age < 130) {
  finalPrice = (price - price * overDiscount).toFixed(2);
  document.getElementById("cost").innerHTML = `
<p class="p-3 m-0 text-success fw-bold h1">  
${finalPrice}€
</p>
`;
  document.getElementById("data").innerHTML = dataToShow;
}
