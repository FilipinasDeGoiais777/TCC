$(document).ready(function() {
    $('#table-servico').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/administracao/modelo/list-adm.php",
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
                "data": "RUA",
                "className": "text-center"
            },
            {
                "data": "NUMERO",
                "className": "text-center"
            },
            {
                "data": "TELEFONE",
                "className": "text-center"
            },
            {
                "data": "CELULAR",
                "className": "text-center"
            },
            {
                "data": "EMAIL",
                "className": "text-center"
            },
            {
                "data": "ID",
                "orderable": false,
                "serchable": false,
                "className": "text-center",
                "render": function(data, type, row, meta) {
                    return `
                    <button id="${data}" class="btn btn-info btn-sm btn-view"><i class="mdi mdi-eye"></i></button>
                    <button id="${data}" class="btn btn-primary btn-sm btn-edit"><i class="mdi mdi-pencil"></i></button>
                    <button id="${data}" class="btn btn-danger btn-sm btn-delete"><i class="mdi mdi-trash-can"></i></button>
                    `
                }
            }
        ]
    })
})