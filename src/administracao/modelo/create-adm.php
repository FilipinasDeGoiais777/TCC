<?php

include('../../banco/conexao.php');

if(!$conexao){
    $dados = array(
        'tipo' => 'info',
        'mensagem' => 'Infelizmente não foi posssível conectar-se ao banco no mento. Tente novamente mais tarde'
    );
} else{

    $requestData = $_REQUEST;
    echo "<pre>";
        print_r($requestData);
        echo "</pre>";
        exit;
    if(empty($requestData['NOME']) || empty($requestData['TIPO'])  || empty($requestData['BAIRRO'])  || empty($requestData['RUA'])
    || empty($requestData['NUMERO'])  || empty($requestData['TELEFONE']) || empty($requestData['CELULAR'])  || empty($requestData['EMAIL']) ){
        $dados = array(
            'tipo' => 'info',
            'mensagem' => 'Existe(m) campo(s) obrigatório(s) vazio(s).'
        );
    } else {

        $sqlComando = "INSERT INTO SERVICO (NOME, TIPO, BAIRRO, RUA, NUMERO, TELEFONE, CELULAR, EMAIL)
        VALUES ('$requestData[NOME]', '$requestData[TIPO]', '$requestData[BAIRRO]', '$requestData[RUA]', '$requestData[NUMERO]', '$requestData[TELEFONE]'
        , '$requestData[CELULAR]', '$requestData[EMAIL]')";

        $resultado = mysqli_query($conexao, $sqlComando);

        if($resultado){
            $dados = array(
                'tipo' => 'success',
                'mensagem' => 'Serviço cadastrado com sucesso.'
            );
        } else{
            $dados = array(
                'tipo' => 'error',
                'mensagem' => 'Não foi possível cadastrar o serviço.'.mysqli_error($conexao)
            );
        }
    }

    mysqli_close($conexao);
}

echo json_encode($dados, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);