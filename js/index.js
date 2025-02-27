document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const fadeElements = document.querySelectorAll('.fade-in');
    const cvBtn = document.getElementById('download-cv-btn');
    const coloredIcons = document.querySelectorAll('.colored-icon');
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

    const options = {
        root: null,
        threshold: 1
    }
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');

        coloredIcons.forEach(icon => {
            icon.classList.remove('colored');
        });
    }
    
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            coloredIcons.forEach(icon => {
                icon.classList.remove('colored');
            });
        } else {
            localStorage.setItem('theme', 'light');
            coloredIcons.forEach(icon => {
                icon.classList.add('colored');
            });
        }
    }
    
    themeToggleBtn.addEventListener('click', () => toggleDarkMode());
    cvBtn.addEventListener('click', () => alert("Currently unavailable"));
        
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
                console.log('Visible');
            }
        });
    }, options);
            
    fadeElements.forEach((el) => observer.observe(el));

    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => alert("Currently unavailable"))
    });
});
