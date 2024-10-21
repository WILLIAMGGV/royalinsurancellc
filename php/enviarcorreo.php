<?php session_start();
include("enlace.php");
require 'librerias/Exception.php';
require 'librerias/PHPMailer.php';
require 'librerias/SMTP.php';

function limpiar($String)
{
    $String = str_replace(array('[', '^', '´', '`', '¨', '~', ']', '<', '>', '*', '·', '--', '%'), "", $String);
    $String = str_replace("'", '"', $String);
    $String = str_replace("/", "-", $String);
    $String = str_replace(".", "", $String);
    return $String;
}

// Enviamos por email la solicitud de condonación
$remite_nombre = "Royal Insurance LLC"; // Tu nombre o el de tu página
$remite_email = "info@royalinsurancellc.com"; // tu correo
$para = strtolower('william.gv@asistentevirtualsas.com');
//$para = strtolower($_POST['contactemail']);
$asunto = ("Solicitud de Cita");
$info = "TEXTO";
//$mensaje = "<center><img src='https://okeyseguro.com/images/logo-okey-seguros-horizontal-fondo-transparente-.png' width='300px'/><br><br><strong>".utf8_decode($remite_nombre)."</strong> - ".$remite_email."</Center><br/>SOLICITUDAGENTE<br/><center><b>".limpiar(($_POST['contactname']))." <br/>Fecha de nacimiento: ".$_POST['contactbirthdate']."<br/> E-Mail: ".(($_POST['contactemail']))." <br/> Telefono - SSN / ITIN: ".(($_POST['contactssn']))." Apartamento o suite: ".(($_POST['contactapartment']))." <br/> Ciudad: ".(($_POST['contactcity']))." <br/> Estado: ".(($_POST['contactstate']))." <br/> ZIP /Postal Code: ".(($_POST['contactzip']))." <br/> National Producer Number (NPN): ".(($_POST['contactnpn']))." <br/> Eres agente con licencia?: ".(($_POST['contactlicense']))." <br/> Cuando estas disponible para comenzar?: ".(($_POST['contactstartdate']))." <br/> Como oiste de nosotros?: ".(($_POST['contacthearaboutus']))." <br/> ha realizado una solicitud para convertirse en agente</b><br/><br/><tr><td><table width='98%' align='center' STYLE='border: 1px solid #F2F2F2;background-color: #999999;' class='features-table'><tbody><tr class='fondo_celda_1' STYLE='border: 1px solid #F2F2F2;font-weight: bold;'><td width='170' valign='top' STYLE='border: 1px solid #F2F2F2' class='text_negro' height='32'><p align='center' style='font-size: 12px;font-weight: bold;'>Descripcion</p><p><label for='codi'></label></p></td></tr><tr STYLE='font-size:12px;border: 2px solid #FFFFFF;background-color: #DDDDCC'><td height='32'>".limpiar(($_POST['contactmessage']))."</td></tr></tbody></table><p></p></td></tr><br><br> Gracias!<br/><br/><br/>Favor no responder este correo, es solo informativo. Gracias!</center>";

$mensaje = "<div align='center'><img src='https://okeyseguro.com/images/logo-okey-seguros-horizontal-fondo-transparente-.png' width='300px' alt=''></div>
    <br>
    <table align='center'  width='80%' style='border-collapse: collapse; border-radius: 10px; background-color:#e6e3e3;'>
        <tr>
          <th style='background-color: #052c65; padding: 10px; border-radius: 10px 10px 0px 0px; color: white;'>Okey Seguros - Tu Gu&iacute;a En Seguros - <span style='color:#ccc; pointer-events: none; text-decoration: none;'>" . str_replace('@', '&#8203;@', str_replace('.', '&#8203;.', $remite_email)) . "</span></th>

          
        </tr>
        
        <tr>
            <td style='padding: 10px;'><h3>Bienvenid@, " . limpiar(($info)) . "</h3></td>
          </tr>
          <tr>
            <td style='padding: 5px 5px 5px 10px;'><strong>Fecha de nacimiento:</strong> " . $info . "</td>
          </tr>
          <tr>
            <td style='padding: 5px 5px 5px 10px;'><strong>E-Mail:</strong> " . (($info)) . "</td>
          </tr>
          <tr>
            <td style='padding: 5px 5px 5px 10px;'><strong>Telefono - SSN / ITIN:</strong> " . (($info)) . " <strong>Apartamento o suite:</strong> " . (($info)) . "</td>
          </tr>
          <tr>
            <td style='padding: 5px 5px 5px 10px;'><strong>Ciudad:</strong> " . (($info)) . " - <strong>Estado:</strong> " . (($info)) . " - <strong>ZIP /Postal Code:</strong> " . (($_POST['contactzip'])) . "</td>
          </tr>
          <tr>
            <td style='padding: 5px 5px 5px 10px;'><strong>National Producer Number (NPN):</strong> " . (($info)) . "</td>
          </tr>
          <tr>
            <td style='padding: 5px 5px 5px 10px;'><strong>Eres agente con licencia?:</strong> " . (($info)) . "</td>
          </tr>
          <tr>
            <td style='padding: 5px 5px 5px 10px;'><strong>Cuando estas disponible para comenzar?:</strong> " . (($info)) . "</td>
          </tr>
          <tr>
            <td style='padding: 5px 5px 5px 10px;'><strong>Como oiste de nosotros?:</strong> " . limpiar(($info)) . "</td>
          </tr>
          <tr align='center'>
            <td style='padding: 20px 5px 20px 10px; background-color: #052c65; border-radius: 0px 0px 10px 10px; color: white; font-weight: bold;'>Ha realizado una solicitud para CONVERTIRTE EN AGENTE</td>
          </tr>
      </table>
      <div align='center' style='font-style: italic; font-weight: bold;' >Favor no responder este correo, es solo informativo.</div>";
//Este bloque es importante
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
strtolower("info@royalinsurancellc.com") . " " . $mail->addAddress("info@royalinsurancellc.com");

//Agregar destinatario
$mail->addAddress($para);
$mail->addAddress("info@okeyseguro.com");
$mail->Subject = $asunto;
$mail->IsHTML(true);
$mail->Body = $mensaje;

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
