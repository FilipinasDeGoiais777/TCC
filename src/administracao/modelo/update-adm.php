<?php

    include('../../banco/conexao.php');

    if($conexao){

        $requestData = $_REQUEST;
        // echo "<pre>";
        // print_r($requestData);
        // echo "</pre>";
        // exit;

        $id = isset($requestData['Id']) ? $requestData['Id'] : '';
        
        if(empty($requestData['Nome']) || empty($requestData['Tipo'])  || empty($requestData['Bairro'])  || empty($requestData['Rua'])
    || empty($requestData['Numero'])  || empty($requestData['Telefone']) || empty($requestData['Celular'])  || empty($requestData['Email']) ){
            $dados = array(
                "tipo" => "info",
                "mensagem" => "Existe(m) campo(s) obrigatório(s) em branco."
            );
        } else{

            $sql = "UPDATE SERVICO SET NOME = '$requestData[Nome]', TIPO = '$requestData[Tipo]', BAIRRO = '$requestData[Bairro]', RUA = '$requestData[Rua]', NUMERO = '$requestData[Numero]',
            TELEFONE = '$requestData[Telefone]', CELULAR = '$requestData[Celular]', EMAIL = '$requestData[Email]' WHERE ID = $id ";

            // echo $sql; exit;

            $resultado = mysqli_query($conexao, $sql);

            if($resultado){
                $dados = array(
                    "tipo" => "success",
                    "mensagem" => "Serviço alterado com sucesso."
                );
            } else {
                $dados = array(
                    "tipo" => "error",
                    "mensagem" => mysqli_error($conexao) 
                );
            }
        }

        mysqli_close($conexao);

    } else {
        $dados = array(
            "tipo" => "info",
            "mensagem" => "Ops... não foi possível conectar ao banco de dados"
        );
    }

echo json_encode($dados, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); 