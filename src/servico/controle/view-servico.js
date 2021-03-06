$(document).ready(function() {

    $('#conteudo').on('click', 'button.view-servico', function(e) {

        e.preventDefault()


        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Dados do serviço')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: ID,
            url: 'src/servico/modelo/view-servico.php',
            success: function(dados) {
                if (dados.tipo == "success") {
                    let servicos = `<div class="modal-body">
                        <div class="form-group">
                            <input type="text" placeholder="Nome" class="form-control" value="${dados.dados.NOME}" disabled="">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Tipo serviço" class="form-control" value="${dados.dados.TIPO}" disabled="">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Bairro" class="form-control" value="${dados.dados.BAIRRO}" disabled="">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Rua" class="form-control" value="${dados.dados.RUA}" disabled="">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Número" class="form-control" value="${dados.dados.NUMERO}" disabled="">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Telefone" class="form-control" value="${dados.dados.TELEFONE}" disabled="">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Celular" class="form-control" value="${dados.dados.CELULAR}" disabled="">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Email" class="form-control" value="${dados.dados.EMAIL}" disabled="">
                        </div>
                    </div>`

                    $('.modal-body').html(servicos)
                    $('.btn-save').hide()
                    $('#telacliente').modal('show')

                } else {
                    alert(dados.mensagem)
                }
            }
        })

    })

})