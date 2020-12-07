$(document).ready(function() {

    $('#table-adm').on('click', 'button.btn-edit', function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição do serviço')

        let idcategoria = `ID=${$(this).attr('ID')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: idcategoria,
            url: 'src/administracao/modelo/view-adm.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/administracao/visao/form-adm.html', function() {
                        $('#nome').val(dado.dados.nome)
                        $('#dataagora').val(dado.dados.datacriacao)

                        if (dado.dados.ativo == "N") {
                            $('#ativo').removeAttr('checked')
                        }

                        $('#idcategoria').val(dado.dados.idcategoria)

                    })
                    $('.btn-save').hide()
                    $('.btn-update').show()
                    $('#modal-categoria').modal('show')
                } else {
                    Swal.fire({
                        title: 'appAulaDS',
                        text: dado.mensagem,
                        type: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })

})