var name = prompt("Digite o nome do aluno");
var grade1 = prompt("Digite a nota 1");
var grade2 = prompt("Digite a nota 2");
var grade3 = prompt("Digite a nota 3");
var average = (parseFloat(grade1) + parseFloat(grade2) + parseFloat(grade3))/3

alert("A média do " + name + " é " + average)