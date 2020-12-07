$(document).ready(function() {

    $('#pesquisar2').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo2').remove()
        $('#conteudo').load('src/servico/visao/list-servico.html')
    })
})