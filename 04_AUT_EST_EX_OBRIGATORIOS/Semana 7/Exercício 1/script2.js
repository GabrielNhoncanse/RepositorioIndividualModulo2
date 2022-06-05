//Script para adicionar um parágrafo que mostre o resultado.

var valor = 0;
var res = 0;
function somar() {
    if (valor == 0) {

        valor = document.getElementById("valor").value;
        res = parseInt(valor);
    }
    res = res + 1;
    document.getElementById("res").innerHTML = "Resultado = " + res
}

function subtrair() {
    if (valor == 0) {

        valor = document.getElementById("valor").value;
        res = parseInt(valor);
    }
    res = res - 1;
    document.getElementById("res").innerHTML = "Resultado = " + res
}
