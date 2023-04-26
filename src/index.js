import validator from './validator.js';

//mostrar o número do cartão de crédito

document.getElementById("send").addEventListener("click", IsValid);

function IsValid() {
// use .value porque retorna o valor do atributo em um campo de texto
  const numberCard = document.getElementById("numText").value;
  const send = document.getElementById ("send");
  const resultValid = validator.isValid(numberCard); // que representa validator aqui?
  const numberBlock = validator.maskify(numberCard);
  //validação para que não entre uma String vazia
  if (numberCard === ""){
    alert("Escreva o número do seu cartão por favor");
  }
  else if(resultValid === true){
    send.innerHTML = numberBlock + "Cartão válido";
  }
  else{
    send.innerHTML = numberBlock + "Cartão inválido";
  }
}
console.log(validator);