const validator = {

  isValid(numberC) {
    let resultado = numberC.split("").map(Number);
    resultado = resultado.reverse();

    let element = 1;
    while (element < resultado.length) {
      resultado[element] = resultado[element] * 2;
      if (resultado[element] > 9) {
        resultado[element] = resultado[element] - 9;
      }
      element = element + 2;
    }

    let sum = 0;
    for (element = 0; element < resultado.length; element++) {
      sum = sum + resultado[element];
    }

    return sum % 10 === 0;
  },

  maskify: function (numberC) {
    // número é transformado em string para iterar no for
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