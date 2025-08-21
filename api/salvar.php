<?php
// Retorno sempre em JSON
header("Content-Type: application/json; charset=UTF-8");

// Configurações do banco
$host = "localhost"; 
$user = "root";      // usuário do MySQL
$pass = "";          // senha do MySQL
$db   = "ipjacarei";

// Conexão
$conn = new mysqli($host, $user, $pass, $db);

// Verifica conexão
if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Erro de conexão: " . $conn->connect_error
    ]);
    exit;
}

// Captura os dados enviados pelo formulário
$nome         = $_POST["nome"] ?? "";
$email        = $_POST["email"] ?? "";
$telefone     = $_POST["telefone"] ?? "";
$idade        = !empty($_POST["idade"]) ? intval($_POST["idade"]) : null;
$comoConheceu = $_POST["como_conheceu"] ?? "";
$mensagem     = $_POST["mensagem"] ?? "";
$newsletter   = isset($_POST["newsletter"]) ? 1 : 0;

// Validação simples (pode expandir se quiser)
if (empty($nome) || empty($email) || empty($telefone)) {
    echo json_encode([
        "success" => false,
        "message" => "Preencha todos os campos obrigatórios."
    ]);
    exit;
}

// Prepara a query (seguro contra SQL Injection)
$stmt = $conn->prepare("
    INSERT INTO membros (nome, email, telefone, idade, como_conheceu, mensagem, newsletter) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
");

// Verifica se a preparação da query falhou
if ($stmt === false) {
    echo json_encode([
        "success" => false,
        "message" => "Erro na preparação da query: " . $conn->error
    ]);
    exit;
}

$stmt->bind_param("sssissi", $nome, $email, $telefone, $idade, $comoConheceu, $mensagem, $newsletter);

// Executa e retorna resposta
if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Cadastro realizado com sucesso!"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Erro ao salvar: " . $stmt->error
    ]);
}

// Fecha conexões
$stmt->close();
$conn->close();


