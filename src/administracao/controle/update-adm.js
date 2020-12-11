$(document).ready(function() {
    $('.btn-update').click(function(e) {
        console.log("Passei aqui")
        e.preventDefault()
        console.log(document.getElementById('form-adm'))
        let dados = new FormData(document.getElementById('form-adm'))

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