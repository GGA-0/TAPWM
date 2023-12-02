function procura(texto) {
    var textoLowerCase = texto.toLowerCase();

    var contadorA = 0;

    for (var i = 0; i < textoLowerCase.length; i++) {
        if (textoLowerCase[i] === 'a') {
            contadorA++;
        }
    }

    console.log("Número de letras 'A' encontradas: " + contadorA);
}

var textoUsuario = prompt("Digite um texto:");
procura(textoUsuario);
