var slides = document.querySelectorAll('.client_carousel-container .client_carousel-container_mySlides');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'client_carousel-container_mySlides';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'client_carousel-container_mySlides active';
}