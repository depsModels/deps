<?php
    function sendEmail($name, $email, $message) {
        $to = "contato@depsmodels.com"; // Endereço de e-mail de destino
        $subject = "Novo contato de $name"; // Assunto do e-mail
        $headers = "From: $email"; // Cabeçalhos do e-mail
        $body = "Você recebeu uma nova mensagem de $name ($email):\n\n$message"; // Corpo do e-mail
        
        // Envia o e-mail
        if (mail($to, $subject, $body, $headers)) {
            return "Email enviado!";
        } else {
            return "Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.";
        }
    }

    // Verifica se o método de requisição é POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        // Captura os dados do formulário
        $name = htmlspecialchars($_POST['name']);
        $email = filter_var($_POST['from'], FILTER_SANITIZE_EMAIL);
        $message = htmlspecialchars($_POST['message']);
        
        // Verifica se o nome não está vazio e não excede 50 caracteres
        if (empty($name) || strlen($name) > 50) {
            echo "O nome deve conter no máximo 50 caracteres.";
            return;
        }

        // Verifica se o e-mail é válido
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Por favor, insira um e-mail válido.";
            return;
        }

        // Verifica se o e-mail não excede 100 caracteres
        if (strlen($email) > 100) {
            echo "O e-mail deve conter no máximo 100 caracteres.";
            return;
        }

        // Verifica se a mensagem não excede 500 caracteres
        if (strlen($message) > 500) {
            echo "A mensagem deve conter no máximo 500 caracteres.";
            return;
        }

        // Se todas as validações forem bem-sucedidas, envia o e-mail
        echo sendEmail($name, $email, $message);

    } else {
        // Exemplo de mensagem de erro para método de requisição inválido
        echo "Método de requisição inválido.";
    }
?>
