function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0 && peso > 0) {
        var imc = peso / (altura * altura) //Jeito que a Prof pediu: var imc =Math.round(peso / (altura * altura)) 
        var resultado = "";

        if (imc < 18.5) {
            resultado = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado = "Peso ideal";
        } else if (imc >= 25 && imc < 29.9) {
            resultado = "Sobrepeso";
        } else if (imc >= 30 && imc < 34.9) {
            resultado = "Obesidade Grau I";
        } else if (imc >= 35 && imc < 39.9) {
            resultado = "Obesidade Grau II (Severa)";
        } else {
            resultado = "Obesidade Grau III (Mórbida)";
        }

        document.getElementById('resultado').innerHTML = "Seu IMC é " + imc.toFixed(2) + ". Você está classificado como: " + resultado;
    } else {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos.";
    }
}
