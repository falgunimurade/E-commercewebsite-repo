let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Function to show the current slide based on the index
function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;  // Ensure the index stays within bounds
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transition = 'transform 0.5s ease'; // Adding transition for smooth slide change
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

// Automatically move to the next slide every 3 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

// Optional: Add keyboard navigation support (left and right arrows)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        showSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
        showSlide(currentSlide - 1);
    }
});
