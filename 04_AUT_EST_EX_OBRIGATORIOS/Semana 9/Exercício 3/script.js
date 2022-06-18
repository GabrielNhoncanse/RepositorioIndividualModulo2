function calc() {
    var nome1 = String(document.getElementById("nome1").value);
    var nome2 = String(document.getElementById("nome2").value);
    var nome3 = String(document.getElementById("nome3").value);
    if (nome1 > nome2) {
        var aux = nome1;
        nome1 = nome2;
        nome2 = aux;
        if (nome2 > nome3) {
            var aux = nome2;
            nome2 = nome3;
            nome3 = aux;
            if (nome1 > nome2) {
                var aux = nome1;
                nome1 = nome2;
                nome2 = aux;
            };
        };
    };
    if (nome2 > nome3) {
        var aux = nome2;
        nome2 = nome3;
        nome3 = aux;
        if (nome1 > nome2) {
            var aux = nome1;
            nome1 = nome2;
            nome2 = aux;
        };
    }
    document.getElementById("res").innerHTML = nome1 + "," + nome2 + "," + nome3
};