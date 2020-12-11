$(document).ready(function() {

    $('#btn-save').click(function(e) {
        e.preventDefault()
        $('.modal-title').empty()
        $('.modal-body').empty()


        let dados = $('#form-cad').serialize()

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
                $('#table-servico').DataTable().ajax.reload()
            }
        })
    })
})