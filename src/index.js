import validator from './validator.js';

const numberCard = document.getElementById("send");
numberCard.addEventListener("click", function (event) {
  event.preventDefault();
  isValid();
});

function isValid() {
  const numberC = document.getElementById("numText").value;
  const resultValid = validator.isValid(numberC);
  const numberBlock = validator.maskify(numberC);
  const resultContainer = document.getElementById("result");

  if (numberC === "") {
    resultContainer.innerHTML = `<p>Please fill in the blank fields 😟</p>`;
  } else if (resultValid === true) {
    resultContainer.innerHTML = `<p>${numberBlock} Valid credit card!😊</p>`;
  } else {
    resultContainer.innerHTML = `<p>${numberBlock} Invalid credit card 😐</p>`;
  }

  const form = document.querySelector('.form');
  form.reset();
}
