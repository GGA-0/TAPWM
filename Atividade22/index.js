function Ordena(n1, n2, n3, n4, n5) {
    var matriz = [n1, n2, n3, n4, n5];
    matriz.sort(function (a, b) {
        return b - a;
    });
    return matriz;
}

var num1 = parseInt(prompt("Digite o 1º número:"));
var num2 = parseInt(prompt("Digite o 2º número:"));
var num3 = parseInt(prompt("Digite o 3º número:"));
var num4 = parseInt(prompt("Digite o 4º número:"));
var num5 = parseInt(prompt("Digite o 5º número:"));

var numerosOrdenados = Ordena(num1, num2, num3, num4, num5);

console.log("Números em ordem decrescente:", numerosOrdenados);

