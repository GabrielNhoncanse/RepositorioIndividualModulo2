function somar() {
    var valor = parseInt(document.getElementById("valor").value)
    var res = valor += 1
    document.getElementById("valor").value = res
}

function subtrair() {
    var valor = parseInt(document.getElementById("valor").value)
    var res = valor -= 1
    document.getElementById("valor").value = res
}