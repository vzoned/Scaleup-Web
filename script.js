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

    // --- 2. PREMIUM 3D TILT EFFECT ---
    const heroSection = document.querySelector('.hero');
    const posterVisual = document.getElementById('poster-art');
    const shape = document.querySelector('.poster-shape');
    const image = document.querySelector('.image-wrapper');
    const sticker = document.querySelector('.floating-sticker');

    if (window.innerWidth > 900) {
        heroSection.addEventListener('mousemove', (e) => {
            // Calculate mouse position relative to center
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            // Move elements at different speeds for Parallax Depth
            // 1. Shape moves slowly (Background)
            shape.style.transform = `rotate(-3deg) translate(${x}px, ${y}px)`;
            
            // 2. Image moves moderately (Midground)
            image.style.transform = `translate(${-x * 1.5}px, ${-y * 1.5}px)`;
            
            // 3. Sticker moves fast (Foreground)
            sticker.style.transform = `rotate(-10deg) translate(${x * 2.5}px, ${y * 2.5}px)`;
        });
    }
});
