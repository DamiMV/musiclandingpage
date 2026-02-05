// Cambiar el fondo del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('nav');
    if (window.scrollY > 50) {
        header.style.background = '#000';
    } else {
        header.style.background = 'rgba(0,0,0,0.8)';
    }
});

// Animación simple para las tarjetas de álbum (opcional)
const cards = document.querySelectorAll('.album-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#1DB954';
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Abrir/Cerrar menú al clickear la hamburguesa
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

// Cerrar el menú automáticamente al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});