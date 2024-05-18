new Vue({
    el: '#app',
    data: {
        form: {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            // Adın ve e-postanın boş olup olmadığını kontrol et
            if (!this.form.name.trim() || !this.form.email.trim()) {
                alert("Lütfen adınızı ve e-postanızı girin.");
                return;
            }
        
            // E-posta adresinin geçerli bir formatta olup olmadığını kontrol et
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.form.email)) {
                alert("Geçerli bir e-posta adresi girin.");
                return;
            }
        
            // Form submit edildiğinde başka bir sayfaya yönlendirme
            // Bu örnekte yönlendirilecek sayfa 'iletisimbilgiler.html'
            const url = 'iletisimbilgiler.html?' +
                'name=' + encodeURIComponent(this.form.name) +
                '&email=' + encodeURIComponent(this.form.email) +
                '&message=' + encodeURIComponent(this.form.message);
        
            window.location.href = url;
        },
        
        resetForm() {
            // Formu temizleme işlemi
            this.form = {
                name: '',
                email: '',
                message: ''
            };
        }
    }
});
