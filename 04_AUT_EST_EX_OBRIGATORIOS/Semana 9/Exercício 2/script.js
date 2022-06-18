function calc() {
    var valor = document.getElementById("valor").value;
    var digitos = valor.split("");
    var soma = 0;
    for (let i = 0; i < digitos.length; i++) {
        soma += parseInt(digitos[i]);
    }
    document.getElementById("res").innerHTML = "Soma dos dígitos = " + soma;
}