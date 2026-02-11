document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PRELOADER & REVEAL SEQUENCE ---
    const preloader = document.querySelector('.preloader');
    const hiddenElements = document.querySelectorAll('.hidden-on-load');

    // Simulate loading time (1.5 seconds)
    setTimeout(() => {
        // Fade out preloader
        preloader.classList.add('fade-out');

        // Reveal elements with a staggered delay
        setTimeout(() => {
            hiddenElements.forEach(el => {
                el.classList.remove('hidden-on-load');
                el.classList.add('reveal');
            });
        }, 300); // Start revealing shortly after loader fades

    }, 1500);


    // --- 2. MOBILE MENU ---
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

    // --- 3. PARALLAX TILT EFFECT (Desktop Only) ---
    const heroSection = document.querySelector('.hero');
    const shape = document.querySelector('.poster-shape');
    const image = document.querySelector('.image-wrapper');
    const sticker = document.querySelector('.floating-sticker');

    if (window.innerWidth > 900) {
        heroSection.addEventListener('mousemove', (e) => {
            // Calculate mouse position from center
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            // Apply different speeds for depth perception
            shape.style.transform = `rotate(-3deg) translate(${x * 0.5}px, ${y * 0.5}px)`;
            image.style.transform = `translate(${-x}px, ${-y}px)`;
            sticker.style.transform = `rotate(-10deg) translate(${x * 2}px, ${y * 2}px)`;
        });
    }
});
