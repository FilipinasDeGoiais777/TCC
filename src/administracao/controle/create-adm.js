$(document).ready(function() {
    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-adm').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/adm/modelo/create-adm.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Services',
                    text: dados.mensagem,
                    type: dados.tipo,
                    confirmButtonText: 'OK'
                })
                $('#modal-servico').modal('hide')
                $('#table-servico').DataTable().ajax.reload()
            }
        })
    })
})