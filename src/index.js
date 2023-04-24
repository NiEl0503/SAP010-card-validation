//obter o número do cartão
let numberCard= prompt("Insira o número do seu cartão de crédito - Lembre-se que você só pode usar dígitos numéricos!!");
document.write(numberCard);

// o usuário não pode deixar espaços em branco
function ValidCard(numberCard) {
  while ((numberCard) == "") {
    numberCard= prompt("Insira o número do seu cartão de crédito - Lembre-se que você só pode usar dígitos numéricos!!");
}

// Adicionar números de cartão de crédito a uma array na ordem inversa
let numberCardReverse= (numberCard.split("")).reverse();

// obter números pares na array
for(let i=0; i < numberCardReverse.length; i++){
  if(i % 2 !== 0)}

  // multiplique os números pares por 2
let multiplication= numberCardReverse[i] * 2;

// adicione os dígitos do resultado se o número for maior ou igual a 10, (firstValue---> salve o primeiro dígito que resultou da multiplicação e secondValue---> Armazene o segundo dígito do número resultante da multiplicação)
if (multiplication >= 10)
{
  let firstValue= parseInt(multiplication/10);
  let secondValue= multiplication%10; 
  let sumValues= firstValue+secondValue;



}