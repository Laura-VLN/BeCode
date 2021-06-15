<?php

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
//require 'vendor/autoload.php';


if (isset($_POST["name"]) && isset($_POST["lastname"]) && isset($_POST["gender"]) && isset($_POST["email"]) && isset($_POST["country"]) && isset($_POST["subject"]) && isset($_POST["message"])) {
    $errors = array();
    $pattern_names = "/^[a-zA-Z]{2,20}$/";
    $name = trim($_POST["name"]);
    $lastname = trim($_POST["lastname"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    if (!preg_match($pattern_names, $name) || empty($name)) {
        $errors["name"] = "This name is invalid.";
    }
    if (!preg_match($pattern_names, $lastname) || empty($lastname)) {
        $errors["lastname"] = "This lastname is invalid.";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || empty($email)) {
        $errors["email"] = "This email is invalid.";
    }
    if (strlen($message) < 20 || empty($message)) {
        $errors["message"] = "This message is invalid.";
    }
    
    if (count($errors) > 0) {
        echo "<div class=\"errorDiv\">Please correct your informations !</div>";
        exit;
    }
    else {
        require 'vendor/phpmailer/src/Exception.php';
        require 'vendor/phpmailer/src/PHPMailer.php';
        require 'vendor/phpmailer/src/SMTP.php';
        //Instantiation and passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = 0;                                         //Send using SMTP
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'devadressetest@gmail.com';                     //SMTP username
            $mail->Password   = 'Becode123!';                               //SMTP password
            $mail->SMTPSecure = "tls";         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            $mail->setFrom($email, $name);
            $mail->addAddress('devadressetest@gmail.com', "Hackers Poulette");     //Add a recipient

            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Request from ' . $name . " " . $lastname;
            $mail->Body    = $message;

            $mail->send();
            echo "<div class=\"sentDiv\">Message has been sent !</div>";
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }

    
    /*else {
        $bdd = new PDO('mysql:host=localhost;dbname=test','root', '');
    }*/
}