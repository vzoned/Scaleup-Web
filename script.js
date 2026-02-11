document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE MENU ---
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    const icon = hamburger.querySelector('i');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // --- 2. 3D TILT EFFECT (Clean Version) ---
    const heroSection = document.querySelector('.hero');
    const posterCard = document.querySelector('.poster-card');
    const badge = document.querySelector('.floating-badge');

    // Only run on desktop/larger screens
    if (window.innerWidth > 900) {
        heroSection.addEventListener('mousemove', (e) => {
            // Get values relative to center of screen
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            // Tilt the main card slightly
            posterCard.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
            
            // Move the badge more (Parallax effect)
            if(badge) {
                badge.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
            }
        });

        // Reset on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            posterCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
            if(badge) badge.style.transform = `translate(0, 0)`;
        });
    }
});
