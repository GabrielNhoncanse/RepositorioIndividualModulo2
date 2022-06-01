var valor1 = document.getElementById("valor1").value
var valor2 = document.getElementById("valor2").value

function trocar() {
    var aux = valor1
    valor1 = valor2
    valor2 = aux
    document.getElementById("valor1").innerHTML = valor1
    document.getElementById("valor2").innerHTML = valor2
}