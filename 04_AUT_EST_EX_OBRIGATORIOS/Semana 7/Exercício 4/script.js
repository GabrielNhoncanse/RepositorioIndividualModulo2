function calc() {
    var passageiros = document.getElementById("passageiros").value
    var periodo = document.getElementById("periodo")
    if (periodo.value == "Diurno") {
        if (passageiros > 50) {
            var preco = passageiros * 120
        }
        else {
            var preco = passageiros * 200
        }
    }
    else if (periodo.value == "Noturno") {
        if (passageiros > 50) {
            var preco = passageiros * 80
        }
        else {
            var preco = passageiros * 100
        }
    }
    document.getElementById("total").innerHTML = "Total da compra = R$" + preco
}