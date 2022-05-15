var conteudo = document.querySelector(".conteudo")

function mostrar() {
    if (conteudo.style.display === 'block') {
        conteudo.style.display = 'none'
    }
    else {
        conteudo.style.display = 'block'
    }

}