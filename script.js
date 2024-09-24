// Toggle della navigazione per dispositivi mobili
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navIcon = navToggle.querySelector('i');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    // Cambia l'icona
    if (navLinks.classList.contains('nav-active')) {
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-times');
    } else {
        navIcon.classList.remove('fa-times');
        navIcon.classList.add('fa-bars');
    }
});

// Zurück nach oben Button
const backToTopButton = document.getElementById('back-to-top');
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// GSAP e ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animazioni Hero Section
gsap.from('.hero-content h1', { opacity: 0, y: -50, duration: 1 });
gsap.from('.hero-content p', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from('.hero-content .btn', { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

// Animazioni per le sezioni
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    gsap.fromTo(section, {
        opacity: .5,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: section,
            start: 'top 100%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Typed.js
let typed = new Typed('#typed', {
    strings: ['HTML5 & CSS3', 'JavaScript ES6+', 'Responsive Design', 'Sviluppo Web'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
});

// Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js config loaded');
});
