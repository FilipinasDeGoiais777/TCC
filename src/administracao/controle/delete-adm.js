$(document).ready(function() {

    $('#table-adm').on('click', 'button.btn-delete', function(e) {
        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title: 'Services',
            text: 'Deseja realmente excluir esse serviço?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result => {
            if (result.value) {
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'src/administracao/modelo/delete-adm.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Services',
                            text: dados.mensagem,
                            type: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#cadastro').modal('hide')
                        $('#table-adm').DataTable().ajax.reload()
                    }
                })
            }
        }))
    })
})