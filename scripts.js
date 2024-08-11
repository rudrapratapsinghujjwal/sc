document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Slider
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000); // Change slide every 1.5 seconds
    showSlide(currentSlide);

    // Q&A Toggle
    document.querySelectorAll('.qna .question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.querySelector('.answer');
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        });
    });

    // Section transition effect
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.style.opacity = 1;
            } else {
                section.style.opacity = 0;
            }
        });
    });
});
