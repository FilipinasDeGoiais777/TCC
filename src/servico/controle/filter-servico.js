$(document).ready(function() {
    $('.btn-pesquisar').click(function(e) {
        e.preventDefault()
        let filtro = $('#form-list').serialize()
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: filtro,
            url: 'src/servico/modelo/filter-servico.php',
            success: function(dados) {
                if (dados.tipo == "success") {
                    $('#conteudo').empty()
                    let servicos = `<div class="row">`
                    console.log(dados)
                    for (const servico of dados.dados) {

                        servicos += `<div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${servico.NOME}</h5>
                                    <p class="card-text">${servico.TIPO}</p>
                                    <p class="card-text">${servico.BAIRRO}</p>
                                    <button class="btn btn-primary view-servico" id="${servico.ID}">Saiba mais</button>
                                </div>
                            </div>
                        </div>`
                    }
                    servicos += `</div>`
                    $('#conteudo').html(servicos)
                } else {
                    alert(dados.mensagem)
                }
            }
        })
    })
})