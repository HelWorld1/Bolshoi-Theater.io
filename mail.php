<?php
require 'assets/phpmailer/PHPMailer.php';
require 'assets/phpmailer/SMTP.php';
require 'assets/phpmailer/Exception.php';

$title = 'Тема письма';
$file = $_FILES['file'];

$c = true;

$title = 'Заголовок письма';
foreach ($_POST as $key => $value) {
	if ( $value != '' && $key != 'project_name' && $key != 'admin_email' && $key != 'form_subject' ){
		$body .= '
		' . ( ($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">' ) . '
			<td style="padding: 10px; border: #e9e9e9 1px solid;"><b>$key<b><td>
			<td style="padding: 10px; border: #e9e9e9 1px solid;">$value</td>
		</tr>
		';
	}
}

$body = '<table style="width: 100%;">$body</table>';

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->CharSet 		= "UTF-8"
    $mail->Host       	= 'smtp.gmail.com';
    $mail->SMTPAuth   	= true;
    $mail->Username   	= 'gdima4813@gmail.com';
    $mail->Password   	= 'jhrgqblvwxjjezip';
    $mail->SMTPSecure 	= 'ssl';
    $mail->Port       	= 465;

    $mail->setFrom('gdima4813@gmail.com', 'Заявка с Большого Театра');
    $mail->addAddress('gdima4813@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body    = $body;

    $mail->send();
    echo 'Message has been sent';
} catch(Exception $e) {
	$status = 'Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}';
}