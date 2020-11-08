// CONSEGNA

// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$( document ).ready(function() {

// VARIABILI GLOBALI
  var numeriRand = [];
  var arrayUser = [];
  var arrayWin = [];

// alert con 5 numeri

  // Generazione numeri random
  var i = 0;
  while(numeriRand.length < 5) {
    var n = Math.floor(Math.random() * 100) + 1;
    if(numeriRand.indexOf(n) === -1) {numeriRand.push(n);
    i++;
    }
  }
  alert("Memorizza questi numeri: " + numeriRand);
    // debug
  console.log("Memorizza i seguenti numeri", numeriRand);


// Attendi 30 secondi

var counter = setInterval(timer, 100);
var count = 30;
function timer() {
  if(count > 0) {
    console.log(count);
    count--;
    $("div.msg, div.msg > p, div.msg > img").show();
  } else {
    $("p, img").hide();
    $("div.CTA > button, div.CTA > p").show();
    clearInterval(counter);
  }

}

// L’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente

// Richiesta numero utente

$("button").click(memory);
function memory() {
  var i = 0;
  while(i < 5) {
    var numeroUser = parseInt(prompt("Inserisci i numeri della sequenza che hai memorizzato"));


    if (numeroUser <= 100 && numeroUser >= 1 && !arrayUser.includes(numeroUser) && numeriRand.includes(numeroUser)) {
      arrayUser.push(numeroUser);
      // debug
      console.log("I numeri inseriti dall'utente sono ", arrayUser);
      }


    // Se il numero è già stato inserito
    else {
      // debug
      console.log("Numero non valido, riprova");
    }
    i++;
  }

  // Esito
  for (var i = 0; i < 5; i++) {
    if (numeriRand.includes(arrayUser[i])) {
      arrayWin.push(arrayUser[i]);
    }
  }

  // debug
  console.log("Hai azzeccato i seguenti numeri", arrayWin);

  // Comunicazione esito

  document.getElementById('esito').innerHTML = "Hai ricordato correttamente " + arrayWin.length + " numeri: " + arrayWin;
}

});
