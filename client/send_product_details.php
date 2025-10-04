<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate data
    if (empty($data['name']) || empty($data['email']) || empty($data['message']) || empty($data['productName'])) {
        echo json_encode(["status" => "error", "message" => "Missing required fields"]);
        exit;
    }

    $to = "prachiburate13@gmail.com"; // 🔹 Change to your receiving email
    $subject = "Product Details Request: " . htmlspecialchars($data['productName']);
    $body = "
        Name: " . htmlspecialchars($data['name']) . "\n
        Email: " . htmlspecialchars($data['email']) . "\n
        Phone: " . htmlspecialchars($data['phone'] ?? '') . "\n
        Product: " . htmlspecialchars($data['productName']) . "\n
        Message: " . htmlspecialchars($data['message']) . "\n
    ";
    $headers = "From: " . $data['email'] . "\r\n" .
               "Reply-To: " . $data['email'] . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Email sending failed"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
