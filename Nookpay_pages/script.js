// Check if the device is iOS
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

document.addEventListener('DOMContentLoaded', () => {
    // Highlight the relevant card based on device
    const androidCard = document.getElementById('android-card');
    const iosCard = document.getElementById('ios-card');
    
    if (isIOS) {
        iosCard.classList.add('border-2', 'border-primary', 'shadow-lg');
    } else {
        androidCard.classList.add('border-2', 'border-primary', 'shadow-lg');
    }
    
    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 