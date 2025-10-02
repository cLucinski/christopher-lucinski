console.log("Script loaded.");

// Smooth scroll for all internal links
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle smooth scrolling
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Add click event to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for internal links that aren't empty
            if (href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1); // Remove the # character
                smoothScrollTo(targetId);
            }
        });
    });
});
