function calculoalt() {
    var vel = document.getElementById("vel").value
    var hmax = (vel * vel) / 20
    document.getElementById("altura").innerHTML = "Altura máxima = " + hmax + " metros"
}

function calculotmp() {
    var vel = document.getElementById("vel").value
    var time = vel / 10
    document.getElementById("tempo").innerHTML = "Tempo total = " + time + " segundos"
}
