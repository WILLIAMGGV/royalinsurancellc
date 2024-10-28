<?php
$cliente = 'William Godoy';
$email = $_REQUEST["email"];
$asunto = $_REQUEST["asunto"];
$mensaje = $_REQUEST["mensaje"];

$destinatario = $email; //Quitamos algun espacion en blanco

$cuerpo = '<!DOCTYPE html>
    <html lang="es">
    <head>
    <title>Envio de email de forma masiva - Urian Viera</title>';
$cuerpo .= ' 
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-weight: 300;
        color: #888;
        background-color:rgba(230, 225, 225, 0.5);
        line-height: 30px;
        text-align: center;
    }
    .contenedor{
        width: 80%;
        min-height:auto;
        text-align: center;
        margin: 0 auto;
        background: #ececec;
        border-top: 3px solid #E64A19;
    }
    .btnlink{
        padding:15px 30px;
        text-align:center;
        background-color:#cecece;
        color: crimson !important;
        font-weight: 600;
        text-decoration: blue;
    }
    .btnlink:hover{
        color: #fff !important;
    }
    .imgBanner{
        max-width:48%;
        margin-left: auto;
        margin-right: auto;
        display: block;
        padding:0px;
    }
    .misection{
        color: #34495e;
        margin: 4% 10% 2%;
        text-align: center;
        font-family: sans-serif;
    }
    .mt-5{
        margin-top:50px;
    }
    .mb-5{
        margin-bottom:50px;
    }
    </style>
';

$cuerpo .= '
</head>
<body>
    <div class="contenedor">' . $mensaje . '</div>
    </body>
  </html>';

//Cabecera Obligatoria
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: Royal Insurance LLC <info@royalinsurancellc.com>' . "\r\n";
$headers .= 'Cc: ' . "\r\n";

//OPCIONAR
$headers .= "Reply-To: ";
$headers .= "Return-path:";
$headers .= "Cc:";
$headers .= "Bcc:";

if (mail($destinatario, $asunto, $cuerpo, $headers)) {
    echo "20" . $email;
} else {
    echo "21";
}
