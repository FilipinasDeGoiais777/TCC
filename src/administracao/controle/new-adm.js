$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo serviço')

        const datacriacao = new Date().toLocaleString()

        $('.modal-body').load('src/administracao/visao/form-adm.html', function() {
            $('#dataagora').val(datacriacao)
        })

        $('.btn-save').show()

        $('#adicionar').modal('show')
    })
})