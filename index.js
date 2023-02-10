const calculate = document.getElementById('calculate');

function imc() {
    // Importante , propriedade value que tras o valor do elemento
    const nme = document.getElementById('nme').value; 
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const txtResult = document.getElementById('result');

    // Importante , fun;ao toFixed() trava as casas decimais conforme o valor
    const imcValue = (weight / (height * height)).toFixed(2);
   
    // Importante , || operador ou do javascript
    if (nme == ''  || height == '' || weight == '') { 
    
    // Importante , propriedade textContent que altera o conteudo do elemento
        txtResult.textContent = 'Please complete all required text fields';
    // Importante , IsNaN se for NaN retorna true
    } else if (isNaN(imcValue)) {
        txtResult.textContent = 'Please complete Weight and Height with numbers';
        console.log('not calculating');
    } else {
        txtResult.textContent = 'This is your IMC '+ nme + ":\n" +  imcValue +  'Kg/m2\nYou`re';
        if (imcValue < 18.5){
            txtResult.textContent += "\nUnderweight"
        } else if (imcValue < 25) {
            txtResult.textContent += "\nat Ideal Weight"
        } else if (imcValue < 30) {
            txtResult.textContent += "\nSlightly Overweight"
        } else if (imcValue < 35) {
            txtResult.textContent += "\nObesity Grade I"
        } else if (imcValue < 40) {
            txtResult.textContent += "\nObesity Grade II"
        } else {
            txtResult.textContent += "\nObesity Grade III"
        }
       
        console.log('calculate');
    }

}

calculate.addEventListener('click', imc);