<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Örnek kullanıcı bilgileri
    $expected_domain = '@sakarya.edu.tr';
    $user_id = 'b1812100001';
    $expected_username = $user_id . $expected_domain;
    $expected_password = $user_id;
    
    if ($username === $expected_username && $password === $expected_password) {
        echo "Hoşgeldiniz " . htmlspecialchars($user_id);
    } else {
        header("Location: login.html");
        exit();
    }
} else {
    header("Location: login.html");
    exit();
}
?>
