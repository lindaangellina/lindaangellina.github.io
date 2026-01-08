// Script untuk animasi dan interaksi
document.addEventListener('DOMContentLoaded', function() {
    // Animasi fade in untuk course cards
    const cards = document.querySelectorAll('.course-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // Animasi fade in untuk certificate cards
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, (cards.length * 150) + (index * 150));
    });

    // Animasi untuk lesson items jika ada
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });

    // Click handler untuk certificate cards - zoom effect
    certificateCards.forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('.certificate-img');
            if (img) {
                // Buat modal sederhana untuk menampilkan gambar lebih besar
                const modal = document.createElement('div');
                modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    cursor: pointer;
                `;
                
                const modalImg = document.createElement('img');
                modalImg.src = img.src;
                modalImg.style.cssText = `
                    max-width: 90%;
                    max-height: 90%;
                    border-radius: 12px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                `;
                
                modal.appendChild(modalImg);
                document.body.appendChild(modal);
                
                // Tutup modal saat diklik
                modal.addEventListener('click', function() {
                    modal.style.opacity = '0';
                    setTimeout(() => modal.remove(), 300);
                });
                
                // Animasi fade in
                modal.style.opacity = '0';
                setTimeout(() => {
                    modal.style.transition = 'opacity 0.3s ease';
                    modal.style.opacity = '1';
                }, 10);
            }
        });
    });

    // Smooth scroll untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efek hover untuk buttons
    const buttons = document.querySelectorAll('.lesson-btn, .back-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Console log untuk tracking
    console.log('Website Pembelajaran Data Science dimuat dengan sukses!');
    console.log('Total Kursus Tersedia:', cards.length);
    console.log('Total Sertifikat:', certificateCards.length);
});