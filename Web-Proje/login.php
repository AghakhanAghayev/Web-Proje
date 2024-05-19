<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen kullanıcı adı ve şifre değerlerini alın
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Kullanıcı adı ve şifreyi kontrol edin
    if ($username === 'g231210556@sakarya.edu.tr' && $password === 'g231210556') {
        // Kullanıcıyı hosgeldin.php sayfasına yönlendirin
        header('Location: hosgeldin.php?username=' . $username);
        exit; // Yönlendirmeden sonra scripti sonlandırın
    } else {
        // Başarısız giriş durumunda kullanıcıyı login sayfasına geri yönlendirin ve hata mesajı gösterin
        header('Location: giriş.html?error=1');
        exit;
    }
} else {
    // Sayfa doğrudan erişilirse kullanıcıyı login sayfasına geri yönlendirin
    header('Location: giriş.html');
    exit;
}
?>
