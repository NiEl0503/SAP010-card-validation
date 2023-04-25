let numCard = document.getElementById("numberCard");

let sendData = document.getElementById("send");

function isValidCard() {

  let cardNumber = (numCard.value);

  let numberCardReverse = (cardNumber.split("")).reverse();

  console.log(numberCardReverse);

  for(i = 0; i < numberCardReverse.length; i++){
    if(i % 2 !== 0) {
      if(numberCardReverse[i]* 2)}
}
console.log(multiplication);

//duvida (suma de los digitos que sean mayor o igual a 10)
for (i = 0; i < numberCardReverse.length; i++){
  if(numberCardReverse[i].length === 2){ 
    numberCardReverse[i] = parseInt(numberCardReverse[i][0]) + parseInt(numberCardReverse[i][1]);
  } else {
    numberCardReverse[i] = parseInt(numberCardReverse[i]);
  }
  
}

// suma de pares e impares (quienes son los impares?)


//Sumo todos los digitos y si es multiplo de 10 la tarjeta es valida
let sumArrayCard = 0;
for(i = 0; i < numberCardReverse.length; i++){
    sumArrayCard += numberCardReverse[i];
}
console.log(sumArrayCard);
if(sumArrayCard %10 == 0 ) {
    alert("Su tarjeta es valida");
} else {
    alert("Su tarjeta no es valida");
}

}



}





// document.getElementById('send').addEventListener('click',validar,false);



// executado si condicao e atendida



  

// adicione os dígitos do resultado se o número for maior ou igual a 10, (firstValue---> salve o primeiro dígito que resultou da multiplicação e secondValue---> Armazene o segundo dígito do número resultante da multiplicação)
if (multiplication >= 10)
{
  let firstValue= parseInt(multiplication/10);
  let secondValue= multiplication%10; 
  let sumDigitos= firstValue+secondValue;

// obter números impares na array
for(let k=0; k < numberCardReverse.length; k++){
  if(i % 2 == 0)}




}