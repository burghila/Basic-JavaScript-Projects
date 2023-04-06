// Countdown function
function countdown(durationInSeconds, displayElement) {
    const timerInterval = setInterval(() => {
        // Calculate minutes and seconds
        let minutes = Math.floor(durationInSeconds / 60);
        let seconds = durationInSeconds % 60;

        // Display the time
        displayElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Decrease the time
        durationInSeconds--;

        // Stop the countdown when it reaches 0
        if (durationInSeconds < 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Set the countdown timer and display
const timerDisplay = document.getElementById('timer');
countdown(300, timerDisplay); // 300 seconds = 5 minutes

// Slideshow function
function slideshow() {
    const slides = document.querySelectorAll('.slide');
    let activeIndex = 0;

    setInterval(() => {
        // Hide the current active slide
        slides[activeIndex].classList.remove('active');

        // Move to the next slide, or the first slide if at the end
        activeIndex++;
        if (activeIndex >= slides.length) {
            activeIndex = 0;
        }

        // Show the new active slide
        slides[activeIndex].classList.add('active');
    }, 3000); // Change slide every 3000 milliseconds (3 seconds)
}

slideshow();
