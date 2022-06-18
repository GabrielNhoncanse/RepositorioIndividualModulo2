function calc() {
    var numero1 = 0;
    var numero2 = 1;
    var aux = 0;
    var lista = [];
    var termo = parseInt(document.getElementById("termo").value)
    for (var i = 1; i <= termo; i++) {
        aux = numero1 + numero2;
        numero1 = numero2;
        numero2 = aux;
        lista.push(" " + numero1)
    }
    document.getElementById("res").innerHTML = lista
}