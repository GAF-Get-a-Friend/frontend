<?php
include 'database.php';

$id = $_POST['id'] ?? null;
$name = $_POST['name'] ?? null;
$email = $_POST['email'] ?? null;
$age = $_POST['age'] ?? null;

if ($id && $name && $email && $age) {
    $stmt = $pdo->prepare("UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?");
    $stmt->execute([$name, $email, $age, $id]);
    echo "User updated successfully!";
} else {
    echo "Please provide id, name, email, and age.";
}
?>