$(document).ready(function() {
    $('.btn-update').click(function(e) {
        console.log("Passei aqui")
        e.preventDefault()
        let form = document.getElementById('form-adm')
        let dados = $("#form-adm")

        console.log(form)
        console.log(dados)
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