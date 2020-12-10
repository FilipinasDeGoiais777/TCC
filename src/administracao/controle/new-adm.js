$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.btn-update').hide()
        $('#btn-save').hide()

        $('.modal-title').append('Adicionar novo serviço')


        $('.modal-body').load('src/administracao/visao/form-adm.html', function() {

        })

        $('.btn-save').show()

        $('#cadastro').modal('show')
    })
})