<?php

    include('../../banco/conexao.php');

    if($conexao){

        $requestData = $_REQUEST;

        $colunas = $requestData['columns'];

        $sql = "SELECT * FROM SERVICO WHERE 1=1 ";
        $resultado = mysqli_query($conexao, $sql);
        $qtdeLinhas = mysqli_num_rows($resultado);

        $filtro = $requestData['search']['value'];
        if(!empty($filtro)){

            $sql .= " AND (TIPO LIKE '$filtro%' ";
            $sql .= " OR nome LIKE '$filtro%') ";
        }

        $resultado = mysqli_query($conexao, $sql);
        $totalFiltrados = mysqli_num_rows($resultado);

        $colunaOrdem = $requestData['order'][0]['column'];
        $ordem = $colunas[$colunaOrdem]['data'];
        $direcao = $requestData['order'][0]['dir'];

        $inicio = $requestData['start'];
        $tamanho = $requestData['length'];

        $sql .= " ORDER BY $ordem $direcao LIMIT $inicio, $tamanho";
        //echo $sql;
        //exit;

        $resultado = mysqli_query($conexao, $sql);

        $dados = array();
        while($linha = mysqli_fetch_assoc($resultado)){
            $dados[] = $linha;
        }

        $json_data = array(
            "draw" => intval($requestData['draw']),
            "recordsTotal" => intval($qtdeLinhas),
            "recordsFiltered" => intval($totalFiltrados),
            "data" => $dados
        ); 

        mysqli_close($conexao);

    } else{
    $json_data = array(
        "draw" => 0,
        "recordsTotal" => 0,
        "recordsFiltered" => 0,
        "data" => array()
    ); 
    }

echo json_encode($json_data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);