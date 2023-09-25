<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $company = $_POST["company"];
    $message = $_POST["message"];

    // The email address where you want to send the data
    $to_email = "info@dcl.ba";

    // Email subject
    $subject = "New contact from $first_name $last_name";

    // Email message
    $email_message = "First Name: $first_name\n";
    $email_message .= "Last Name: $last_name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Phone Number: $phone\n";
    $email_message .= "Company: $company\n";
    $email_message .= "Message:\n$message";

    // Additional email headers
    $headers = "From: $email\n";

    // Sending the email
    if (mail($to_email, $subject, $email_message, $headers)) {
        echo "Your message has been successfully sent.";
    } else {
        echo "There was an issue sending your message.";
    }
}
?>
