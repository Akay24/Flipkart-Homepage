let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function updateSlider() {
    const cardSlider = document.getElementById('cardSlider');
    const offset = -currentIndex * (cards[0].clientWidth + 20); // Adjust based on card width and margin
    cardSlider.style.transform = `translateX(${offset}px)`;
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalCards) % totalCards; // Circular movement
    updateSlider();
}
