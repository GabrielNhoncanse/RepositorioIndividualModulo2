function calc() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var lista = [valor1];
    for (var j = valor1; j < valor2; j++) { //aumentar tamanho da lista
        aux = valor1 + 1;
        valor1 = aux;
        lista.push(aux);
    }

    var listaprimos = [];
    var divisores = 0;
    for (var t = 0; t <= lista.length; t++) { //selecionar todos os numeros da lista
        for (var i = 0; i <= lista[t]; i++) {//verificar se o numero selecionado é primo
            if ((lista[t] % i) == 0) {
                divisores++;
            }
            if (divisores == 2) {
                listaprimos.push(lista[t]);
            }
        }
    }
    //console.log(lista);
    console.log(listaprimos);
}