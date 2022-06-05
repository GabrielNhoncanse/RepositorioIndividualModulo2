function ordenar() {
    var valFoco = parseInt(document.getElementById("valFoco").value)
    var listaoriginal = document.getElementById("lista").value
    var lista = document.getElementById("lista")
    var listare = lista.value.split(",")
    for (let j = 0; j < listare.length - 1; j++) {
        for (let i = 0; i < listare.length - 1; i++) {
            listare[i] = parseInt(listare[i])
            listare[i + 1] = parseInt(listare[i + 1])
            if (listare[i] >= listare[i + 1]) {
                let dado = listare[i + 1]
                listare[i + 1] = listare[i]
                listare[i] = dado
            }
        }
    }
    const search = (val, arr) => {
        for (let k = 0; k < arr.length; k++) {
            if (val === arr[k]) {
                return "está na posição " + k
            }
        }
        return "não foi encontrado"
    }
    document.getElementById("desordenado").innerHTML = "Lista dada = " + listaoriginal;
    document.getElementById('resultado').innerHTML = "Lista em ordem crescente = " + listare;
    document.getElementById("valorFoco").innerHTML = "Valor foco " + search(valFoco, listare);
}