import validator from './validator.js';

let numCard = document.getElementById("numberCard").addEventListener("click", xxx, false);

let sendData = document.getElementById("send");



function isValidCard() {
  let card = str === "";
//validação para que não entre uma String vazia
    if(card){
          alert("Escreva o número do seu cartão por favor");
    }
// use .value porque retorna o valor do atributo em um campo de texto
  let cardNumber = (card.value);
// .split para ir de string para array e .reverse para inverter os números no array
  let numberCardReverse = (cardNumber.split("")).reverse();

  console.log(numberCardReverse);
// devemos selecionar os números pares da array e multiplicá-los por 2
for(i = 0; i < numberCardReverse.length; i++){
  if(i % 2 !== 0) {(numberCardReverse[i]* 2)}
// suma de los digitos que sean mayor o igual a 10 (ParseInt: extrair número da string)
if(numberCardReverse[i] >=10){ 
  numberCardReverse[i] = parseInt(numberCardReverse[i][0]) + parseInt(numberCardReverse[i][1]);
} else {
  numberCardReverse[i] = parseInt(numberCardReverse[i]);  
  }
}
//Sumo todos los digitos y si es multiplo de 10 la tarjeta es valida
let sumCard = 0;
for(i = 0; i < numberCardReverse.length; i++){
    sumCard += numberCardReverse[i];
}
console.log(sumCard);
if(sumCard %10 == 0 ) {
    alert("Su tarjeta es valida");
} else {
    alert("Su tarjeta no es valida");
}
}



// document.getElementById('send').addEventListener('click',validar,false);



// executado si condicao e atendida
