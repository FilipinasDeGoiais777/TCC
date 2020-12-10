<?php

    include('../../banco/conexao.php');

    if($conexao){

        $requestData = $_REQUEST;
        echo "<pre>";
        print_r($requestData);
        echo "</pre>";
        exit;
        
        if(empty($requestData['NOME']) || empty($requestData['TIPO'])  || empty($requestData['BAIRRO'])  || empty($requestData['RUA'])
    || empty($requestData['NUMERO'])  || empty($requestData['TELEFONE']) || empty($requestData['CELULAR'])  || empty($requestData['EMAIL']) ){
            $dados = array(
                "tipo" => "info",
                "mensagem" => "Existe(m) campo(s) obrigatório(s) em branco."
            );
        } else{

            $sql = "UPDATE SERVICO SET NOME = '$requestData[NOME]', TIPO = '$requestData[TIPO]', BAIRRO = '$requestData[BAIRRO]', RUA = '$requestData[RUA]', NUMERO = '$requestData[NUMERO]',
            TELEFONE = '$requestData[TELEFONE]', CELULAR = '$requestData[CELULAR]', EMAIL = '$requestData[EMAIL]' WHERE ID = $id ";

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