$(document).ready(function() {
    $('#table-servico').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/servico/modelo/list-servico.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/DataTables/dataTables.brazil.json"
        },
        "columns": [{
                "data": "ID",
                "className": "text-center"
            },
            {
                "data": "NOME",
                "className": "text-center"
            },
            {
                "data": "TIPO",
                "className": "text-center"
            },
            {
                "data": "BAIRRO",
                "className": "text-center"
            },
            {
                "data": "ID",
                "orderable": false,
                "serchable": false,
                "className": "text-center",
                "render": function(data) {
                    return `
                                <button id="${data}" class="btn btn-info btn-sm btn-view"><i class="mdi mdi-eye"></i> Saiba mais</button>
                                `
                }
            }
        ]
    })
})