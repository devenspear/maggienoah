// ========================================
// Maggie & Noah Wedding - JavaScript
// ========================================

// ========================================
// Hero Slideshow
// ========================================
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let slideInterval;

function goToSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Add active class to current slide and indicator
    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function startSlideshow() {
    slideInterval = setInterval(nextSlide, 6000);
}

function resetSlideshow() {
    clearInterval(slideInterval);
    startSlideshow();
}

// Click handlers for indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
        resetSlideshow();
    });
});

// Start the slideshow
startSlideshow();

// ========================================
// Navigation Scroll Effect
// ========================================
const nav = document.querySelector('.main-nav');
let lastScrollY = window.scrollY;

function handleNavScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleNavScroll, { passive: true });

// ========================================
// Scroll Reveal Animation
// ========================================
const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkReveal, { passive: true });
window.addEventListener('load', checkReveal);

// ========================================
// Smooth Scroll
// ========================================
function scrollToRSVP() {
    document.getElementById('rsvp').scrollIntoView({
        behavior: 'smooth'
    });
}

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// RSVP Form Handler
// ========================================
function handleRSVP(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;

    // Create a beautiful confirmation
    const form = document.getElementById('rsvp-form');
    form.innerHTML = `
        <div class="rsvp-success" style="text-align: center; padding: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">💌</div>
            <h3 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--primary-color); margin-bottom: 1rem;">
                Thank You, ${name}!
            </h3>
            <p style="color: var(--text-light); font-size: 1rem; line-height: 1.8;">
                ${attendance === 'yes'
                    ? "We're thrilled you'll be joining us on our special day!"
                    : "We're sorry you won't be able to make it, but we appreciate you letting us know."
                }
            </p>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 1.5rem;">
                A confirmation has been sent to ${email}
            </p>
        </div>
    `;

    // Add fade-in animation
    const successDiv = form.querySelector('.rsvp-success');
    successDiv.style.opacity = '0';
    successDiv.style.transform = 'translateY(20px)';
    successDiv.style.transition = 'all 0.6s ease';

    setTimeout(() => {
        successDiv.style.opacity = '1';
        successDiv.style.transform = 'translateY(0)';
    }, 100);
}

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial reveal check
    setTimeout(checkReveal, 100);

    // Add loaded class for any initial animations
    document.body.classList.add('loaded');
});
