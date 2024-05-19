<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hoşgeldiniz</title>
</head>
<body>
    <?php
    // Hoşgeldiniz mesajını göster
    if (isset($_GET['username'])) {
        $username = $_GET['username'];
        echo "<h1>Hoşgeldiniz, $username!</h1>";
    }
    ?>
</body>
</html>
