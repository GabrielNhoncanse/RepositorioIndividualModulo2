function calc() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    // var lista = [valor1];
    // for (var j = valor1; j < valor2; j++) { //aumentar tamanho da lista
    //     aux = valor1 + 1;
    //     valor1 = aux;
    //     lista.push(aux);
    // }

    var listaprimos = [];

    for (var t = valor1; t <= valor2; t++) { //selecionar todos os numeros da lista
        var divisores = 0;
        for (var i = 2; i < t; i++) { //verificar se o numero selecionado é primo
            if ((t % i) == 0) {
                divisores++;
            };
        };

        if (divisores == 0 && t != 1) {
            listaprimos.push(t);
        };
    };
    document.getElementById("res").innerHTML = listaprimos
};