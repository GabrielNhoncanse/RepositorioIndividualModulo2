function calc() {
    var valor = document.getElementById("valor").value
    var nota100 = valor / 100
    var resto100 = valor % 100
    var nota50 = 0
    var nota20 = 0
    var nota10 = 0
    var nota5 = 0
    var nota2 = 0
    var nota1 = 0
    if (resto100 > 0) {
        nota50 = resto100 / 50
        var resto50 = resto100 % 50
        if (resto50 > 0) {
            nota20 = resto50 / 20
            var resto20 = resto50 % 20
            if (resto20 > 0) {
                nota10 = resto20 / 10
                var resto10 = resto20 % 10
                if (resto10 > 0) {
                    nota5 = resto10 / 5
                    var resto5 = resto10 % 5
                    if (resto5 > 0) {
                        nota2 = resto5 / 2
                        var resto2 = resto5 % 2
                        if (resto2 > 0) {
                            nota1 = resto2 / 1
                        }
                    }
                }
            }
        }
    }
    document.getElementById("100").innerHTML = "Nota(s) de 100 reais = " + parseInt(nota100)
    document.getElementById("50").innerHTML = "Nota(s) de 50 reais = " + parseInt(nota50)
    document.getElementById("20").innerHTML = "Nota(s) de 20 reais = " + parseInt(nota20)
    document.getElementById("10").innerHTML = "Nota(s) de 10 reais = " + parseInt(nota10)
    document.getElementById("5").innerHTML = "Nota(s) de 5 reais = " + parseInt(nota5)
    document.getElementById("2").innerHTML = "Nota(s) de 2 reais = " + parseInt(nota2)
    document.getElementById("1").innerHTML = "Nota(s) de 1 reais = " + parseInt(nota1)
}