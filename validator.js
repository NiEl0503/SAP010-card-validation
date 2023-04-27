const validator = {
  
    isValid: function(numberC) {  
    const numberCardReverse = (numberC.split("")).reverse();
    const numberC = document.getElementById("numText").value;
    // .split para ir de string para array e .reverse para inverter os números no array
    const numberCardReverse = (numberC.split("")).reverse();
    // devemos selecionar os números pares da array e multiplicá-los por 2
    // i valor inicial da variável de controle da repetição
    for(let i = 0; i < numberCardReverse.length; i++){
      if(i % 2 === 0) {numberCardReverse[i] = (numberCardReverse[i]* 2)
      // suma de los digitos que sean mayor o igual a 10. ParseInt: extrair número da string
        if(numberCardReverse[i] >=10){ 
          numberCardReverse[i] = parseInt(numberCardReverse[i][0]) + parseInt(numberCardReverse[i][1]);
        } 
      } 
      else {
        numberCardReverse[i] = parseInt(numberCardReverse[i]);  
      }
    }
    //Sumo todos los digitos y si es multiplo de 10 la tarjeta es valida
    let sumCard = 0;
    for(let i = 0; i < numberCardReverse.length; i++){
      sumCard += numberCardReverse[i];
    }
    if(sumCard %10 === 0 ) {
      return true
    } else {
      return false
    }
  },
  

  maskify: function (numberC) {
  // número é transformado em string para iterar no for
    const mask = numberC.toString();
    let maskNum = "";
    for (let i = 0; i < mask.length; i++) {
      if (i < mask.length - 4) {
        maskNum = maskNum + mask[i];
      } else {
        maskNum = maskNum + "#";
      }
    }
    return maskNum;
  }
}
export default validator;
