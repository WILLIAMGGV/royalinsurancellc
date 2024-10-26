<?php
// guardar.php
require 'librerias/Exception.php';
require 'librerias/PHPMailer.php';
require 'librerias/SMTP.php';

// Obtener el contenido JSON enviado en la solicitud
$input = file_get_contents('php://input');

// Decodificar el JSON a un array asociativo
$data = json_decode($input, true);

// Comprobar si se recibió el contenido
if (isset($data['contenido'])) {
    $contenido = $data['contenido'];

    // Enviamos por email la solicitud de condonación
    $remite_nombre = "Royal Insurance LLC"; // Tu nombre o el de tu página
    $remite_email = "info@royalinsurancellc.com"; // tu correo
    $para = strtolower('williamggv@gmail.com');

    $asunto = ("Solicitud de Cita");
    $info = "TEXTO";

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->SMTPDebug = 2;                      // Enable verbose debug output
    //$mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'tls://smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth    = true;                                   // Enable SMTP authentication
    //$mail->SMTPAutoTLS = false;
    $mail->Username   = 'info@royalinsurancellc.com';                     // SMTP username
    $mail->Password   = 'Carmen2024#';                                // SMTP password
    $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    //$mail->SMTPKeepAlive = true;  
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    //Recipients
    $mail->setFrom($remite_email, utf8_decode($remite_nombre));


    //Agregar destinatario
    $mail->addAddress($para);
    $mail->addAddress("info@okeyseguro.com");
    $mail->Subject = $asunto;
    $mail->IsHTML(true);
    $mail->Body = $contenido;

    //Avisar si fue enviado o no y dirigir al index		
    if (!$mail->Send()) {
        $mail->addAddress("williamggv@gmail.com");
        if (!$mail->Send()) {
        }

        echo "Error/" . mysqli_error($mysqli);
    } else {
        mysqli_commit($mysqli); //mysqli_query("COMMIT");
        echo "OK/" . $info;
    }
} else {
    // Responder con un mensaje de error
    echo json_encode(['status' => 'error', 'message' => 'No se recibió contenido']);
}
