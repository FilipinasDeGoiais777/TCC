$(document).ready(function() {

    $('#table-adm').on('click', 'button.btn-edit', function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição do serviço')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: ID,
            url: 'src/administracao/modelo/view-adm.php',
            success: function(dados) {
                if (dados.tipo == "success") {
                    let servicos = `<form id="form-adm">
                        <div class="form-group">
                            <input type="text" placeholder="Nome" class="form-control" value="${dados.dados.NOME}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Tipo serviço" class="form-control" value="${dados.dados.TIPO}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Bairro" class="form-control" value="${dados.dados.BAIRRO}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Rua" class="form-control" value="${dados.dados.RUA}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Número" class="form-control" value="${dados.dados.NUMERO}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Telefone" class="form-control" value="${dados.dados.TELEFONE}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Celular" class="form-control" value="${dados.dados.CELULAR}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Email" class="form-control" value="${dados.dados.EMAIL}">
                        </div>
                    </form>`

                    $('.modal-body').html(servicos)
                    $('#btn-save').hide()
                    $('.btn-update').show()
                    $('#cadastro').modal('show')
                } else {
                    Swal.fire({
                        title: 'Services',
                        text: dados.mensagem,
                        type: dados.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })

})