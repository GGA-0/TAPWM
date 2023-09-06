var num1 = parseFloat(prompt("Digite o primeiro número"));
var num2 = parseFloat(prompt("Digite o segundo número"));

var sum = num1 + num2;
var sub = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
var rest = num1 % num2;

alert(
    "A soma de " + num1 + " e " + num2 + " é " + sum +
    "\nA subtração de " + num1 + " e " + num2 + " é " + sub +
    "\nA multiplicação de " + num1 + " por " + num2 + " é " + mult +
    "\nA divisão de " + num1 + " por " + num2 + " é " + div +
    "\nO resto da divisão de " + num1 + " por " + num2 + " é " + rest 
)