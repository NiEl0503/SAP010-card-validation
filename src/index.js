import validator from './validator.js';

//mostrar o número do cartão de crédito

document.getElementById("send").addEventListener("click", validarnum);

function nuCard() {
  let numberCard = document.getElementById("number-Card").value;
  let send = document.getElementById ("send");
  let resultValid = validator.isValid(numberCard); // que representa validator aqui?
  let numberBlock = validator.maskify(numberCard);
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