// Sayfa yüklendiğinde kontrol
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sayfa başarıyla yüklendi');
    
    // Butonlara tıklama olayları ekle
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log(`${this.textContent} butonuna tıklandı`);
        });
    });
});

// Hata yakalama
window.addEventListener('error', function(e) {
    console.error('Bir hata oluştu:', e.message);
}); 