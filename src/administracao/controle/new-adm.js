$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo serviço')

        $('.modal-body').load('src/administracao/visao/form-adm.html', function() {})

        $('.btn-update').hide()
        $('.btn-save').show()
        $('#cadastro').modal('show')
    })
})