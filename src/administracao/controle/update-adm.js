$(document).ready(function() {
    $('.btn-update').click(function(e) {
        e.preventDefault()

        let dados = $('#form-adm').serialize()

        $('input[type=checkbox]').each(function() {
            if (!this.checked) {
                dados += '&' + this.name + '=off'
            }
        })

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

                $('#modal-adm').modal('hide')
                $('#table-adm').DataTable().ajax.reload()
            }
        })
    })
})