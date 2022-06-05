function verificar() {
    var numero = document.getElementById("num").value;
    var modelo = /^[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}$/;
    if (numero.match(modelo)) {
        document.getElementById("res").innerHTML = "Telefone Válido!";
    }
    else {
        alert("Telefone Inválido!");
    }
}