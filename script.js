// Set the wedding date (you can modify this)
const weddingDate = new Date('2024-12-31T00:00:00').getTime();

// Update countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<h2>The Big Day Is Here!</h2>';
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to prevent delay
updateCountdown();

// Smooth scroll to RSVP section
function scrollToRSVP() {
    document.getElementById('rsvp').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Handle RSVP form submission
function handleRSVP(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;
    
    // Here you would typically send this data to a server
    // For now, we'll just show an alert
    alert(`Thank you for your RSVP!\n\nName: ${name}\nEmail: ${email}\nAttendance: ${attendance}`);
    
    // Clear the form
    event.target.reset();
} 