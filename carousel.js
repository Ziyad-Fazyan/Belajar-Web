// Buat file baru bernama carousel.js dan tambahkan kode ini

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    // Tampilkan slide pertama
    slides[0].classList.add('active');

    // Fungsi untuk mengganti slide
    function showSlide(n) {
        // Sembunyikan semua slide
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Tampilkan slide yang aktif
        slides[n].classList.add('active');
        dots[n].classList.add('active');
        currentSlide = n;
    }

    // Event listener untuk dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Fungsi autoplay
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }

    // Jalankan autoplay setiap 3 detik
    setInterval(nextSlide, 3000);
});