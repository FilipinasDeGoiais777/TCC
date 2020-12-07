$(document).ready(function() {

    $('.btn-view').click(function(e) {
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
            url: 'src/servico/modelo/view-adm.php',
            success: function(dados) {
                if (dados.tipo == "success") {
                    $('#conteudo').empty()
                    let servicos = `<div class="modal-body">
                        <div class="form-group">
                            <input type="text" placeholder="Nome" class="form-control" value="${servico.NOME}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Tipo serviço" class="form-control" value="${servico.TIPO}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Bairro" class="form-control" value="${servico.BAIRRO}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Rua" class="form-control" value="${servico.RUA}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Número" class="form-control" value="${servico.NUMERO}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Telefone" class="form-control" value="${servico.TELEFONE}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Celular" class="form-control" value="${servico.CELULAR}">
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Email" class="form-control" value="${servico.EMAIL}">
                        </div>
                    </div>`

                    $('#conteudo').html(servicos)
                    $('#cadastro').modal('show')
                } else {
                    alert(dados.mensagem)
                }
                // success: function(dado) {
                //     if (dado.tipo == "success") {
                //         $('.modal-body').load('src/servico/visao/form-servico.html', function() {
                //             $('#nome').val(dado.dados.NOME)
                //             $('#nome').attr('readonly', 'true')
                //             $('#tipo').val(dado.dados.TIPO)
                //             $('#tipo').attr('readonly', 'true')
                //             $('#bairro').val(dado.dados.BAIRRO)
                //             $('#bairro').attr('readonly', 'true')
                //             $('#rua').val(dado.dados.RUA)
                //             $('#rua').attr('readonly', 'true')
                //             $('#numero').val(dado.dados.NUMERO)
                //             $('#numero').attr('readonly', 'true')
                //             $('#telefone').val(dado.dados.TELEFONE)
                //             $('#telefone').attr('readonly', 'true')
                //             $('#celular').val(dado.dados.CELULAR)
                //             $('#celular').attr('readonly', 'true')
                //             $('#email').val(dado.dados.EMAIL)
                //             $('#email').attr('readonly', 'true')
                //         })
                //         $('.btn-save').hide()
                //         $('.btn-update').hide()
                //         $('#modal-servico').modal('show')
                //     } else {
                //         Swal.fire({
                //             title: 'appAulaDS',
                //             text: dado.mensagem,
                //             type: dado.tipo,
                //             confirmButtonText: 'OK'
                //         })
                //     }
            }
        })

    })

})