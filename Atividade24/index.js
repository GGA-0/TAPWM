function dividir(a, b) {
    var resultado = a / b;

    if (isNaN(resultado)) {
        console.log("Divisão deu NaN");
    } else if (!isFinite(resultado)) {
        console.log("Divisão de Infinity");
    } else {
        console.log("Resultado da divisão:", resultado);
    }
}

var numeroA = parseFloat(prompt("Digite o valor de A:"));
var numeroB = parseFloat(prompt("Digite o valor de B:"));

dividir(numeroA, numeroB);
