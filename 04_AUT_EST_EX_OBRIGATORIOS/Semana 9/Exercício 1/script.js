function calc() {
    var valor = document.getElementById("valor").value;
    var digito = valor.split("");
    if (digito.length == 3) {
        if ((digito[0] % 2) == 0) {
            document.getElementById("res").innerHTML = "'" + digito[0] + "' " + "é par";
        }
        else {
            document.getElementById("res").innerHTML = "'" + digito[0] + "' " + "é ímpar";
        }
    }
    else {
        document.getElementById("res").innerHTML = "Valor inválido";
    }
};