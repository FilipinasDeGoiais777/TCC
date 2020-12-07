<?php

    include('../../banco/conexao.php');

    if($conexao){

        $requestData = $_REQUEST;

        $filtro = isset($requestData['nome']) ? $requestData['nome'] : '';

        $sql = "SELECT * FROM SERVICO WHERE 1 = 1 AND (NOME LIKE '%$filtro%' OR TIPO LIKE '%$filtro%' OR BAIRRO LIKE '%$filtro%')";
        $resultado = mysqli_query($conexao, $sql);

        if($resultado && mysqli_num_rows($resultado) > 0){

            while($linha = mysqli_fetch_assoc($resultado)){
                $dadosServico[] = array_map('utf8_encode', $linha);
            }

            $dados = array(
                "tipo" =>"success",
                "mensagem" => "",
                "dados" => $dadosServico
            );

        } else{
            $dados = array(
                "tipo" => "info",
                "mensagem" => "Não possível localizar o serviço.",
                "dados" => array()
            );
        }

        mysqli_close($conexao);

    } else{
        $dados = array(
            "tipo" => "error",
            "mensagem" => "Não possível conecar ao banco de dados",
            "dados" => array()
        );
    }

echo json_encode($dados, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);