$(document).ready(function() {
    $('#btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#telacliente').serialize()


        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/servico/modelo/create-servico.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Services',
                    text: dados.mensagem,
                    type: dados.tipo,
                    confirmButtonText: 'OK'
                })
            }
        })
    })
})