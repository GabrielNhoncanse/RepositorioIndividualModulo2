//binary search. mas está com erro
//deixei aqui para no futuro eu revisar o código
const binary = (val, arr) => {
    var lower = 0
    var upper = arr.lenght - 1

    while (lower <= upper) {
        const middle = lower + Math.floor((upper - lower) / 2)

        if (val === arr[middle]) {
            return middle
        }
        if (val < arr[middle]) {
            upper = middle - 1;
        }
        else {
            lower = middle + 1;
        }
        return ("Valor foco não encontrado")
    }
    document.getElementById("valorFoco").innerHTML = "Valor foco não foi encontrado";
}