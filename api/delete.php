<?php
include 'database.php';

$id = $_POST['id'] ?? null;

if ($id) {
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
    $stmt->execute([$id]);
    echo "User deleted successfully!";
} else {
    echo "Please provide id.";
}
?>