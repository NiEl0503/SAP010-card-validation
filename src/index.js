import validator from './validator.js';

//mostrar o número do cartão de crédito
const numberCard = document.getElementById("send");
numberCard.addEventListener("click", isValid)
function isValid() {
  // use .value porque retorna o valor do atributo em um campo de texto
  const numberC = document.getElementById("numText").value;
  const resultValid = validator.isValid(numberC);
  const numberBlock = validator.maskify(numberC);
  //validação para que não entre uma String vazia
  if (numberC === "") {
    alert("Write the credit card number please");
  }
  else if (resultValid === true) {
    alert(numberBlock + "Valid credit card");
  }
  else {
    alert(numberBlock + "Invalid credit card");
  }
}
