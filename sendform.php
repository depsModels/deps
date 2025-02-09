<?php
    function sendEmail($name, $email, $phone, $message) {
        $to = "contato@depsmodels.com"; // Endereço de e-mail de destino
        $subject = "Novo contato de $name"; // Assunto do e-mail
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Corpo do e-mail com formatação HTML
        $body = "
        <!DOCTYPE html>
        <html lang='pt-BR'>
        <head>
            <meta charset='UTF-8'>
            <title>Novo Contato - Deps Models</title>
        </head>
        <body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
            <h2 style='color: #333;'>Novo Contato - Deps Models</h2>
            <p><strong>Nome:</strong> $name</p>
            <p><strong>E-mail:</strong> $email</p>";
        
        // Adiciona telefone apenas se fornecido
        if (!empty($phone)) {
            $body .= "<p><strong>Telefone:</strong> $phone</p>";
        }
        
        $body .= "
            <p><strong>Mensagem:</strong></p>
            <p style='background-color: #f4f4f4; padding: 10px; border-radius: 5px;'>$message</p>
        </body>
        </html>";

        // Configurações para envio de e-mail HTML
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        
        // Envia o e-mail
        if (mail($to, $subject, $body, $headers)) {
            return "Email enviado com sucesso!";
        } else {
            return "Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.";
        }
    }

    // Verifica se o método de requisição é POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        // Captura os dados do formulário
        $name = htmlspecialchars($_POST['name']);
        $email = filter_var($_POST['from'], FILTER_SANITIZE_EMAIL);
        $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';
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

        // Valida telefone se fornecido (opcional)
        if (!empty($phone) && !preg_match('/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/', $phone)) {
            echo "Por favor, insira um número de telefone válido no formato (DDD) Número.";
            return;
        }

        // Verifica se a mensagem não excede 500 caracteres
        if (strlen($message) > 500) {
            echo "A mensagem deve conter no máximo 500 caracteres.";
            return;
        }

        // Se todas as validações forem bem-sucedidas, envia o e-mail
        echo sendEmail($name, $email, $phone, $message);

    } else {
        // Exemplo de mensagem de erro para método de requisição inválido
        echo "Método de requisição inválido.";
    }
?>
