<?php
    $name = $_GET['username'];
    $tel = $_GET['tel'];
    $email = $_GET['email'];
    
    $comment = $_GET['comment'];

    $mail_message = '
    <html>
    <head>
        <title>Заявка на просчет</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>E-mail:' . $email . '</li>
            <li>Телефон:' . $tel . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: ajaxarm51@gmail.com\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('ajaxarm51@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];
    
    if ($mail) {
        $data['status'] = "Сообщение отправлено";
        header("Location: /"); exit;
    }else{
        $data['status'] = "Произошла ошибка. Сообщение не отправлено!";
    }

    echo json_encode($data);

?>