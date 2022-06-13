var alunos = 0

function tabela() {
    var numeroAlunos = document.getElementById("alunos");

    for (i = 0; i < parseInt(numeroAlunos.value); i++) {
        alunos = i + 1;
        document.getElementById("tabela").innerHTML += `<br>` + `<tr>
        <td>Aluno ` + String(i + 1) + `</td><br><br>
        <td>Nota da prova: <input id="prova-` + String(i) + `" type="number"></input></td>
        <td>Nota do trabalho: <input id="trabalho-` + String(i) + `" type="number"></input></td>
        <td>Média individual: <input id="media-` + String(i) + `" readonly="readonly" type="number"></input></td>
        </tr><br><br>`;
    }
}

function calc() {
    var mediaAluno = 0;

    var notasMedias = 0;
    var mediaGeral = 0;

    var notasProva = 0;
    var mediaProvas = 0;

    var notasTrab = 0;
    var mediaTrab = 0;

    var provas = [];
    var trabalhos = [];

    for (var k = 0; k < alunos; k++) {
        mediaAluno = ((parseFloat(document.getElementById("prova-" + [k]).value) * 2) + (parseFloat(document.getElementById("trabalho-" + [k]).value) * 3)) / 5;
        document.getElementById("media-" + [k]).value = mediaAluno.toFixed(1);

        notasMedias += parseFloat(document.getElementById("media-" + [k]).value);
        mediaGeral = (notasProva / alunos).toFixed(1);
        document.getElementById("mediaGeral").innerHTML = "Média geral dos alunos = " + mediaGeral;

        notasProva += parseFloat(document.getElementById("prova-" + [k]).value);
        mediaProvas = (notasProva / alunos).toFixed(1);
        document.getElementById("mediaProvas").innerHTML = "Média geral das provas = " + mediaProvas;

        notasTrab += parseFloat(document.getElementById("trabalho-" + [k]).value);
        mediaTrab = (notasTrab / alunos).toFixed(1);
        document.getElementById("mediaTrabalhos").innerHTML = "Média geral dos trabalhos = " + mediaTrab;

        provas.push(document.getElementById("prova-" + [k]).value);
        trabalhos.push(document.getElementById("trabalho-" + [k]).value);
    }

    for (let j = 0; j < provas.length - 1; j++) {
        for (let h = 0; h < provas.length - 1; h++) {
            provas[h] = parseFloat(provas[h]);
            provas[h + 1] = parseFloat(provas[h + 1]);
            if (provas[h] >= provas[h + 1]) {
                let dado = provas[h + 1];
                provas[h + 1] = provas[h];
                provas[h] = dado;
            }
        }
    }
    document.getElementById("menorProva").innerHTML = "Menor nota na Prova = " + provas[0];
    document.getElementById("maiorProva").innerHTML = "Maior nota na Prova = " + provas[provas.length - 1];

    for (let j = 0; j < trabalhos.length - 1; j++) {
        for (let h = 0; h < trabalhos.length - 1; h++) {
            trabalhos[h] = parseFloat(trabalhos[h]);
            trabalhos[h + 1] = parseFloat(trabalhos[h + 1]);
            if (trabalhos[h] >= trabalhos[h + 1]) {
                let dado = trabalhos[h + 1];
                trabalhos[h + 1] = trabalhos[h];
                trabalhos[h] = dado;
            }
        }
    }
    document.getElementById("menorTrabalho").innerHTML = "Menor nota no Trabalho = " + trabalhos[0];
    document.getElementById("maiorTrabalho").innerHTML = "Maior nota no Trabalho = " + trabalhos[trabalhos.length - 1];
};