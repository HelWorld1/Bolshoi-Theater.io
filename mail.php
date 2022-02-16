<?php
// Файлы phpmailer
require 'assets/phpmailer/PHPMailer.php';
require 'assets/phpmailer/SMTP.php';
require 'assets/phpmailer/Exception.php';

$mail = new PHPMailer();

$title = "Тема письма";
$name = $_POST['name'];
$company = $_POST['company'];
$tel = $_POST['tel'];
$email = $_POST['email'];

$c = true;
// Формирование самого письма
$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->SMTPAuth   = true;

// Настройки вашей почты
$mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
$mail->Username   = 'gdima4813@gmail.com'; // Логин на почте
$mail->Password   = 'jhrgqblvwxjjezip'; // Пароль на почте
$mail->SMTPSecure = 'tls';
$mail->Port       = 587;

$mail->setFrom('gdima4813@gmail.com', 'Заявка с вашего сайта'); // Адрес самой почты и имя отправителя

// Получатель письма
$mail->addAddress('gdima4813@gmail.com');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

$mail->send();

if (!$mail->send()){
  echo 'Error'
} else {
  echo 'Norm';
}
?>