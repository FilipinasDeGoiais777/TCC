$(document).ready(function() {

    $('#btn-save').click(function(e) {
        e.preventDefault()
        $('.modal-title').empty()
        $('.modal-body').empty()
        $('#btn-save').show()

        let dados = $('#form-adm').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/administracao/modelo/create-adm.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Services',
                    text: dados.mensagem,
                    type: dados.tipo,
                    confirmButtonText: 'OK'
                })
                $('#cadastro').modal('hide')
                $('.btn-update').hide()
                $('#btn-save').show()
                $('#table-servico').DataTable().ajax.reload()
            }
        })
    })
})