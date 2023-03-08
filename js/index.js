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

const randomLetter = ['a', 'b', 'c', 'd', 'e', 'k'];

const randomTicket = `
${randomLetter[Math.floor((Math.random() * 5))]}${randomLetter[Math.floor((Math.random() * 5))]}${Math.floor((Math.random() * 10)+1)}${Math.floor((Math.random() * 10)+1)}${Math.floor((Math.random() * 10)+1)}${Math.floor((Math.random() * 10)+1)}${randomLetter[Math.floor((Math.random() * 5))]}${randomLetter[Math.floor((Math.random() * 5))]}
`

// variabile per indicare se mostrare i dati o no
const dataToShow = (document.getElementById("data").innerHTML = `
            <ul class='list-unstyled d-flex justify-content-between align-items-center text-start'>
                <li>
                <div class='fw-bold'>AGE</div>
                <div>${age}</div>
                </li>
                <li>
                <div class='fw-bold'>KM</div>
                <div>${kmToDo}</div>
                </li>
            </ul>
`);

if (
  isNaN(age) ||
  parseInt(age) < 12 ||
  parseInt(age) > 130 ||
  isNaN(kmToDo) ||
  parseInt(kmToDo) <= 0
) {
  document.getElementById("cost").innerHTML = `
            <p class="p-3 m-0 text-danger fw-bold">  
            Oops!
            </p>
    `;
  document.getElementById("data").innerHTML = `
    <p class="text-center text-danger fw-bold">Riprova.</p>`;
} else {
  document.getElementById('ticketNumber').innerHTML = randomTicket;
    if (age > 18 && age < 65) {
        document.getElementById("cost").innerHTML = `
                  <p class="p-3 m-0 text-white fw-bold">  
                  ${price}€
                  </p>
          `;
        document.getElementById("data").innerHTML = dataToShow;
      } else if (age <= 18 && age > 12) {
        finalPrice = (price - price * under18Discont).toFixed(2);
        document.getElementById("cost").innerHTML = `
      <p class="p-3 m-0 text-white fw-bold">  
      ${finalPrice}€
      </p>
      `;
        document.getElementById("data").innerHTML = dataToShow;
      } else if (age >= 65 && age < 130) {
        finalPrice = (price - price * overDiscount).toFixed(2);
        document.getElementById("cost").innerHTML = `
      <p class="p-3 m-0 text-white fw-bold">  
      ${finalPrice}€
      </p>
      `;
        document.getElementById("data").innerHTML = dataToShow;
      }
}
