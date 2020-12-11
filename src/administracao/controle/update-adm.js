$(document).ready(function() {
    $('.btn-update').click(function(e) {

        e.preventDefault()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/administracao/modelo/update-adm.php',
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
    })
})