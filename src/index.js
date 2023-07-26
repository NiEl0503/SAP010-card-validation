import validator from './validator.js';

const numberCard = document.getElementById("send");
numberCard.addEventListener("click", function (event) {
  event.preventDefault();
  isValid();
});

function isValid() {
  const numberC = document.getElementById("numText").value;
  const resultContainer = document.getElementById("result");

  if (numberC === "") {
    resultContainer.innerHTML = `<p>Please fill in the blank fields 😟</p>`;
    return;
  }

  const resultValid = validator.isValid(numberC);
  const numberBlock = validator.maskify(numberC);

  let message;
  if (resultValid) {
    message = `${numberBlock} Valid credit card!😊`;
  } else {
    message = `${numberBlock} Invalid credit card 😐`;
  }

  resultContainer.innerHTML = `<p>${message}</p>`;

  const form = document.querySelector('.form');
  form.reset();
}
