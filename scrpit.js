// Smooth scrolling para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación al hacer scroll
window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const legacyCards = document.querySelectorAll('.legacy-card');
    
    timelineItems.forEach(item => {
        if(isElementInViewport(item)) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
    
    legacyCards.forEach(card => {
        if(isElementInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Función para detectar elementos en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Inicializar animaciones
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.timeline-item, .legacy-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });
});