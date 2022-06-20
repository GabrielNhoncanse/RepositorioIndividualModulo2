$(document).ready(function () {
    $("#button").click(function () {
        $("#conteudo").fadeToggle(1000);
    });
});

$(document).ready(function () {
    $.get("http://127.0.0.1:3201/getRenatoDelas", function (resultado) {
        var objeto = JSON.parse(resultado);

        for (i = 0; i < Object.keys(objeto).length; i++) {
            $('#exp').append("<ul>" + `<input value="${objeto[i].Linha}" class="editar" readOnly>` + `<button>` + "Editar" + `</button>` + "</ul>");
        };
    });
});
