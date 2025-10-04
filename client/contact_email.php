<?php
// Start output buffering to prevent accidental output
ob_start();

// Disable errors from displaying
error_reporting(0);
ini_set('display_errors', 0);

// Set headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Get form data safely
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validate input
if (!$name || !$email || !$message) {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    ob_end_flush();
    exit;
}

// Recipient email
$to = "prachiburate13@gmail.com"; // Your email
$subject = "New Contact Message from $name";
$body = "Name: $name\nEmail: $email\nMessage:\n$message";

// Proper headers
$from = "no-reply@sunfoods.bemotion.in"; // Must exist on your domain
$headers = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email and respond in JSON only
if(mail($to, $subject, $body, $headers)){
    echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to send email"]);
}

// Flush output buffer
ob_end_flush();
