<?php
include 'database.php';

$name = $_POST['name'] ?? null;
$email = $_POST['email'] ?? null;
$age = $_POST['age'] ?? null;

if ($name && $email && $age) {
    $stmt = $pdo->prepare("INSERT INTO users (name, email, age) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $age]);
    echo "User created successfully!";
} else {
    echo "Please provide name, email, and age.";
}
?>