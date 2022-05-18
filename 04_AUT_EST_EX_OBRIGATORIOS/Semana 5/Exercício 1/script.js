function soma() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var res1 = parseInt(valor1) + parseInt(valor2)
    document.getElementById("resultado").innerHTML = valor1 + "+" + valor2 + "=" + res1
}

function sub() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var res1 = parseInt(valor1) - parseInt(valor2)
    document.getElementById("resultado").innerHTML = valor1 + "-" + valor2 + "=" + res1
}

function mult() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var res1 = parseInt(valor1) * parseInt(valor2)
    document.getElementById("resultado").innerHTML = valor1 + "*" + valor2 + "=" + res1
}

function div() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var res1 = parseInt(valor1) / parseInt(valor2)
    document.getElementById("resultado").innerHTML = valor1 + "/" + valor2 + "=" + res1
}

function cocdiv() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var res1 = parseInt(parseInt(valor1) / parseInt(valor2))
    document.getElementById("resultado").innerHTML = valor1 + "//" + valor2 + "=" + res1
}

function resdiv() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var res1 = parseInt(valor1) % parseInt(valor2)
    document.getElementById("resultado").innerHTML = valor1 + "%" + valor2 + "=" + res1
}