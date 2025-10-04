<?php
// test_mail.php

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Recipient email
$to = "prachiburate13@gmail.com";

// Subject
$subject = "Test Email from Hostinger";

// Message body
$body = "This is a test email sent from PHP on Hostinger.\n";
$body .= "If you receive this, your mail() function works correctly.";

// Headers
$from = "no-reply@sunfoods.bemotion.in"; // Must be an email from your domain
$headers = "From: $from\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if(mail($to, $subject, $body, $headers)){
    echo "✅ Test email sent successfully!";
} else {
    echo "❌ Failed to send test email.";
}
?>
