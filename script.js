document.addEventListener('DOMContentLoaded', () => {
    
    // --- MOBILE MENU ---
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

    // --- MOUSE TILT EFFECT ---
    const poster = document.getElementById('poster-art');
    const heroSection = document.querySelector('.hero');

    if (window.innerWidth > 768) {
        heroSection.addEventListener('mousemove', (e) => {
            // Calculate mouse position relative to center
            const x = (window.innerWidth - e.pageX * 2) / 60;
            const y = (window.innerHeight - e.pageY * 2) / 60;

            // Move main poster container
            poster.style.transform = `translate(${x}px, ${y}px)`;
            
            // Move inner elements in opposite directions for depth
            const cutout = poster.querySelector('.cutout-bg');
            const sticker = poster.querySelector('.sticker');
            
            if(cutout) cutout.style.transform = `rotate(2deg) translate(${-x * 1.5}px, ${-y * 1.5}px)`;
            if(sticker) sticker.style.transform = `rotate(15deg) translate(${x * 1.2}px, ${y * 1.2}px)`;
        });
    }
});
