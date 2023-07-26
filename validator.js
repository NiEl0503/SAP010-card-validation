const validator = {

  isValid(numberC) {
    let resultado = numberC.split("").map(Number);
    resultado = resultado.reverse();

    let index = 1;
    while (index < resultado.length) {
      resultado[index] = resultado[index] * 2;
      if (resultado[index] > 9) {
        resultado[index] = resultado[index] - 9;
      }
      index = index + 2;
    }

    let sum = 0;
    for (index = 0; index < resultado.length; index++) {
      sum = sum + resultado[index];
    }

    return sum % 10 === 0;
  },

  maskify: function (numberC) {
    const mask = numberC.toString();
    let maskNum = "";
    for (let i = 0; i < mask.length; i++) {
      if (i < mask.length - 4) {
        maskNum = maskNum + "#";
      } else {
        maskNum = maskNum + mask[i];
      }
    }
    return maskNum;
  }
}
export default validator;