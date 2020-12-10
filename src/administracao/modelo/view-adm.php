<?php

    include('../../banco/conexao.php');

    if($conexao){

        $requestData = $_REQUEST;

        $id = isset($requestData['ID']) ? $requestData['ID'] : '';

        $sql = "SELECT * FROM SERVICO WHERE ID = $id ";
        $resultado = mysqli_query($conexao, $sql);

        if($resultado && mysqli_num_rows($resultado) > 0){

            while($linha = mysqli_fetch_assoc($resultado)){
                $dadosServico = $linha;
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
            "mensagem" => "Não possível conectar ao banco de dados",
            "dados" => array()
        );
    }

echo json_encode($dados, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);