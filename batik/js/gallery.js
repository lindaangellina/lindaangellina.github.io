// ========== GALLERY FILTER ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            // Hide item first
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';

            setTimeout(() => {
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            }, 300);
        });
    });
});

// Set transition for gallery items
galleryItems.forEach(item => {
    item.style.transition = 'all 0.3s ease';
});

// ========== GALLERY ITEM CLICK ==========
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        const description = this.querySelector('p').textContent;
        
        // Create modal effect (simple alert for now)
        const message = `
╔════════════════════════════════╗
  ${title}
╚════════════════════════════════╝

${description}

Klik OK untuk menutup
        `;
        
        alert(message);
    });
});

// ========== GALLERY ANIMATIONS ON LOAD ==========
window.addEventListener('load', () => {
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, index * 100);
    });
});

// Initialize opacity for animation
galleryItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
});