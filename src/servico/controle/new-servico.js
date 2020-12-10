$(document).ready(function() {
    $('.btn-create').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Cadastrar')


        $('.modal-body').load('src/servico/visao/form-servico.html', function() {})


        $('#telacliente').modal('show')
    })
})