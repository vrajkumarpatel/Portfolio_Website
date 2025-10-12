<?php
if($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);

  $to = "your_email@example.com"; // change this
  $subject = "Portfolio Contact - $name";
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  $headers = "From: $email";

  if(mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Sorry, something went wrong.";
  }
}
?>
