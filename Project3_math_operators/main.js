// Get the HTML elements
const randomButton = document.getElementById("random");
const result = document.getElementById("result");

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    // Generate random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // Display the result
    result.textContent = randomNumber;
}

// Add click event listener to the random button
randomButton.addEventListener("click", generateRandomNumber);
