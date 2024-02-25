<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: text/html; charset=UTF-8');
error_reporting(E_ALL);

$akt_timestamp = time();
$api = $_GET['api'];
$json = file_get_contents('php://input');
$obj = json_decode($json, true);


	switch($api){

		case 'sendContactMail':
			$comp = $obj['comp'];
            $name = $obj['name'];
            $phone = $obj['phone'];
            $mail = $obj['mail'];
            $msg = $obj['msg'];
			
            if($comp){
                $empfaenger = "scheuermann.andy@gmail.com";
                $betreff = "Neue E-Mail von der PF-Homepage!";
                $from = "From: Portfolio Homepage <info@scheuermann.tech>";
                $text = "
                Firma: {$comp} 
                Name: {$name} 
                Telefonnummer: {$phone} 
                E-Mail: {$mail} 
    
                Nachricht: 
    
                $msg         
                ";
                 
                if(mail($empfaenger, $betreff, $text, $from)){
                    echo "true";
                }else{
                    echo "false";
                }
            }
            break;

		default: 
			echo "falseAPI";
			break;
	}

?>