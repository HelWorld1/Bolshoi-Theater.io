<?php
require 'assets/phpmailer/PHPMailer.php';
require 'assets/phpmailer/SMTP.php';
require 'assets/phpmailer/Exception.php';

$title = 'Тема письма';
$file = $_FILES['file'];

$c = true;

$title = 'Заголовок письма';
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

$mail = new PHPMailer\PHPMailer\PHPMailer();

$mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'gdima4813@gmail.com'; // Логин на почте
  $mail->Password   = 'jhrgqblvwxjjezip'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('gdima4813@gmail.com', 'Заявка с вашего сайта'); // Адрес самой почты и имя отправителя
  $mail->addAddress('gdima4813@gmail.com');
  if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
      $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
      $filename = $file['name'][$ct];
      if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
          $mail->addAttachment($uploadfile, $filename);
          $rfile[] = "Файл $filename прикреплён";
      } else {
          $rfile[] = "Не удалось прикрепить файл $filename";
      }
    }
  }
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;
  $mail->send();
} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}