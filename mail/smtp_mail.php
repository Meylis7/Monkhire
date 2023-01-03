<?php

if (isset($_GET) && !empty($_GET)) {
    $_POST = $_GET;
}


$contact_us = '';
$body_data = '';
$email_data = '';


if (isset($_FILES) && is_array($_FILES) && !empty($_FILES)) {

    $folder = "../assets/attachment/";
    $file_name = $_FILES["file_0"]["name"];
    if (!move_uploaded_file($_FILES["file_0"]["tmp_name"], "../assets/attachment/" . $_FILES["file_0"]["name"])) {

        $file_name = '';
        // print_r($_FILES);
        // print_r($_POST);
        // exit();
    }
}

if (isset($_POST['form_name']) && $_POST['form_name'] != '') {
    if ($_POST['form_name'] == 'apply-for-job') {
        $contact_us = ucfirst(str_replace('-', ' ', $_POST['form_name']));
    } else {
        $contact_us = ucfirst(str_replace('_', ' ', $_POST['form_name']));
    }
}
if (isset($_POST['message']) && $_POST['message'] != '') {
    $body_data = $_POST['message'];
}
if (isset($_POST['email']) && $_POST['email'] != '') {
    $email_data = $_POST['email'];
}

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// If necessary, modify the path in the require statement below to refer to the
// location of your Composer autoload.php file.
require 'vendor/autoload.php';

// Replace sender@example.com with your "From" address.
// This address must be verified with Amazon SES.
$sender = 'connect@monkhire.com';
$senderName = 'MonkHire Team';

// Replace recipient@example.com with a "To" address. If your account
// is still in the sandbox, this address must be verified.
// $recipient = 'connect@monkhire.com';
$recipient = 'connect@monkhire.com';

// Replace smtp_username with your Amazon SES SMTP user name.
$usernameSmtp = 'connect@monkhire.com';
// $usernameSmtp = 'AKIA2YHORIZU5OTOQQUZ';


// Replace smtp_password with your Amazon SES SMTP password.
$passwordSmtp = 'Soni@1995';
// $passwordSmtp = 'BMLMiF+93mvKTwK6l5XifDncxJ2ONdsTqaPYhqNz19ft';

// Specify a configuration set. If you do not want to use a configuration
// set, comment or remove the next line.
// $configurationSet = 'ConfigSet';

// If you're using Amazon SES in a region other than US West (Oregon),
// replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP
// endpoint in the appropriate region.
// $host = 'email-smtp.us-east-1.amazonaws.com';
$host = 'smtp.gmail.com';
$port = 587;

// The subject line of the email
$subject = $contact_us;

// The plain-text body of the email
$bodyText =  $body_data;

// The HTML-formatted body of the email
$bodyHtml_form_data = '';
if (isset($_POST) && !empty($_POST)) {
    foreach ($_POST as $key => $value) {
        if ($key != 'form_name' && $key != 'g-recaptcha-response' && $key != 'ct_hiddenRecaptcha') {
            $bodyHtml_form_data .= '<tr>
                <td style=" border: 1px solid #D6DBDF;  border-collapse: collapse; padding: 12px; font-size: 16px;">' . ucfirst(str_Replace('-', ' ', str_Replace('_', ' ', $key))) . '
                </td>
                <td style=" border: 1px solid #D6DBDF;  border-collapse: collapse; padding: 12px; font-size: 16px;">' . ucfirst($value) . '</td>
            </tr>';
        }
    }
}
$bodyHtml = '
<body style="background-color: rgb(211 201 201 / 21%); padding: 0px 50px 0px 50px;">
<style type="text/css">
    body {
        font-family: sans-serif;
    }
</style>
    <div style="max-width: 600px; margin: auto; display: block;"> 
        <table style="text-align: center; width: 100%;">
            <tbody>
                <tr>
                    <td style="text-align: center;">
                        <img src="https://monkhire.com/assets/images/logo-white.png" alt=""
                            style="width:200px; height:100px; object-fit: contain;">
                    </td>
                </tr>
            </tbody>
        </table>
        <table style="background-color: #f2f2f2; padding:30px; width: 100%; border-radius:12px; ">
            <tbody>
                <tr>
                    <td style="font-size: 22px;">Hi Sumit</td>
                </tr>
                
                <tr>
                    <td>
                        <table style="width:100%; border: 1px solid #D6DBDF;  border-collapse: collapse; margin-top: 40px; text-align: center;">
                            ' . $bodyHtml_form_data . '
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding-top: 22px; font-size: 16px;">
                        Many Thanks,<br> Monkhire Team
                    </td>
                </tr>
            </tbody>
        </table>    
    </div>
</body>';


$mail = new PHPMailer(true);

try {
    // Specify the SMTP settings.
    $mail->isSMTP();
    $mail->setFrom($sender, $senderName);
    $mail->Username   = $usernameSmtp;
    $mail->Password   = $passwordSmtp;
    $mail->Host       = $host;
    $mail->Port       = $port;
    $mail->SMTPAuth   = true;
    $mail->SMTPSecure = 'tls';
    if (isset($file_name) && $file_name != '') {
        $mail->addAttachment($folder . $file_name);
    }
    // $mail->addCustomHeader('X-SES-CONFIGURATION-SET', $configurationSet);

    // Specify the message recipients.
    $mail->addAddress($recipient);
    // You can also add CC, BCC, and additional To recipients here.

    // Specify the content of the message.
    $mail->isHTML(true);
    $mail->Subject    = $subject;
    $mail->Body       = $bodyHtml;
    $mail->AltBody    = $bodyText;
    if ($mail->Send()) {
        $bodyHtml_thankyou = '
            <body style="background-color: rgb(211 201 201 / 21%); padding: 0px 50px 0px 50px;">
            <style type="text/css">
                body {
                    font-family: sans-serif;
                }
            </style>
                <div style="max-width: 600px; margin: auto; display: block;"> 
                    <table style="width: 100%; text-align: center;">
                        <tbody>
                            <tr>
                                <td style="text-align: center;">
                                    <img src="https://monkhire.com/assets/images/logo-white.png" alt=""
                                        style="width:200px; height:100px; object-fit: contain;">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table style="background-color: #f2f2f2; padding:30px; width: 100%; border-radius:12px; ">
                        <tbody>
                            <tr>
                                <td style="font-size: 22px;">Hi,</td>
                            </tr>
                            
                            <tr>
                                <td>
                                    Thank you for reaching out, to Monkhire.
                                    We have received your message, someone from our team will contact your soon. In the meantime you can review our  <a href="https://monkhire.com/" target="_blank" > Process </a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top: 22px; font-size: 16px;">
                                    Many Thanks,<br> Monkhire Team
                                </td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </body>';
        // Specify the SMTP settings.
        $mail1 = new PHPMailer(true);
        $mail1->isSMTP();
        $mail1->setFrom($sender, $senderName);
        $mail1->Username   = $usernameSmtp;
        $mail1->Password   = $passwordSmtp;
        $mail1->Host       = $host;
        $mail1->Port       = $port;
        $mail1->SMTPAuth   = true;
        $mail1->SMTPSecure = 'tls';
        // $mail->addCustomHeader('X-SES-CONFIGURATION-SET', $configurationSet);

        // Specify the message recipients.
        $mail1->addAddress($_POST['email']);
        // You can also add CC, BCC, and additional To recipients here.

        // Specify the content of the message.
        $mail1->isHTML(true);
        $mail1->Subject    = 'Thank you for Contacting Us | MonkHire';
        $mail1->Body       = $bodyHtml_thankyou;
        // $mail->AltBody    = $bodyText;
        $mail1->Send();
        $data = json_encode(['status' => 1, 'message' => 'send mail']);
        echo $data, PHP_EOL;
        exit();
    }
    $data = json_encode(['status' => 1, 'message' => 'send mail']);
    echo $data, PHP_EOL;
    exit();
    // echo "Email sent!" , PHP_EOL;
} catch (phpmailerException $e) {
    echo "An error occurred. {$e->errorMessage()}", PHP_EOL; //Catch errors from PHPMailer.
} catch (Exception $e) {
    echo "Email not sent. {$mail->ErrorInfo}", PHP_EOL; //Catch errors from Amazon SES.
}