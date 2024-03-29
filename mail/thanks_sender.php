<?php

// print_r($_POST); exit();
$contact_us = ''; 
$body_data = '';
$email_data = '';

if(isset($_POST['form_name']) && $_POST['form_name']!=''){
    if($_POST['form_name']=='apply-for-job'){
        $contact_us = ucfirst(str_replace('-',' ',$_POST['form_name']));
    }else{
        $contact_us = ucfirst(str_replace('_',' ',$_POST['form_name']));
    }
}
if(isset($_POST['message']) && $_POST['message']!=''){
    $body_data = $_POST['message'];
}
if(isset($_POST['sender_email']) && $_POST['email']!=''){
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
$senderName = 'Hr Team';

// Replace recipient@example.com with a "To" address. If your account
// is still in the sandbox, this address must be verified.
// $recipient = 'connect@monkhire.com';
$recipient = 'ashishnuance@gmail.com';

// Replace smtp_username with your Amazon SES SMTP user name.
// $usernameSmtp = 'AKIA2YHORIZUVKN3E77U';
$usernameSmtp = 'AKIA2YHORIZU5OTOQQUZ';


// Replace smtp_password with your Amazon SES SMTP password.
// $passwordSmtp = 'BCOqKpqZXYin/mUNPHbi6W5L5EOl1oGhigSAu891nylv';
$passwordSmtp = 'BMLMiF+93mvKTwK6l5XifDncxJ2ONdsTqaPYhqNz19ft';

// Specify a configuration set. If you do not want to use a configuration
// set, comment or remove the next line.
// $configurationSet = 'ConfigSet';

// If you're using Amazon SES in a region other than US West (Oregon),
// replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP
// endpoint in the appropriate region.
// $host = 'email-smtp.us-east-1.amazonaws.com';
$host = 'email-smtp.ap-south-1.amazonaws.com';
$port = 587;   

// The subject line of the email
$subject = $contact_us;

// The plain-text body of the email
$bodyText =  $body_data;

// The HTML-formatted body of the email
$bodyHtml_form_data = '';
if(isset($_POST) && !empty($_POST)){
    foreach ($_POST as $key => $value) {
        if($key!='form_name'){
            $bodyHtml_form_data .= '<tr>
                <td style=" border: 1px solid #D6DBDF;  border-collapse: collapse; padding: 12px; font-size: 16px;">'.ucfirst( str_Replace( '-',' ', str_Replace( '_',' ',$key ) ) ).'
                </td>
                <td style=" border: 1px solid #D6DBDF;  border-collapse: collapse; padding: 12px; font-size: 16px;">'.ucfirst($value).'</td>
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
        <table style="display: flex; justify-content: center;">
            <tbody>
                <tr>
                    <td style="text-align: center;">
                        <img src="https://monkhire.com/assets/images/logo-white.png" alt=""
                            style="width:200px; height:100px; object-fit: contain;">
                    </td>
                </tr>
            </tbody>
        </table>
        <table style="background-color: white; padding:60px; width: 100%; border-radius:12px; ">
            <tbody>
                <tr>
                    <td style="font-size: 22px;">Hi Sumit</td>
                </tr>
                
                <tr>
                    <td>
                        <table style="width:100%; border: 1px solid #D6DBDF;  border-collapse: collapse; margin-top: 40px; text-align: center;">
                            '.$bodyHtml_form_data.'
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
    // $mail->addCustomHeader('X-SES-CONFIGURATION-SET', $configurationSet);

    // Specify the message recipients.
    $mail->addAddress($recipient);
    // You can also add CC, BCC, and additional To recipients here.

    // Specify the content of the message.
    $mail->isHTML(true);
    $mail->Subject    = $subject;
    $mail->Body       = $bodyHtml;
    $mail->AltBody    = $bodyText;
    $mail->Send();
    $data = json_encode(['status'=>1]);
    echo $data , PHP_EOL;
    // echo "Email sent!" , PHP_EOL;
} catch (phpmailerException $e) {
    echo "An error occurred. {$e->errorMessage()}", PHP_EOL; //Catch errors from PHPMailer.
} catch (Exception $e) {
    echo "Email not sent. {$mail->ErrorInfo}", PHP_EOL; //Catch errors from Amazon SES.
}

?>