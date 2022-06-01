

function somar() {
    var valor = document.getElementById("valor").value
    valor++
    document.getElementById("res").innerHTML = "Resultado = " + valor
}

function subtrair() {
    var valor = document.getElementById("valor").value
    valor--
    document.getElementById("res").innerHTML = "Resultado = " + valor
}