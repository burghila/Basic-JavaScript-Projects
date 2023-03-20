// Declare a variable to store the counter value
let counter = 0;

// Get the HTML elements we will use later
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");

// Function to increment the counter using the += operator
function incrementCounter() {
  // Increment the counter value by 1 using the += operator
  counter += 1;

  // Update the counter element's text content with the new counter value
  counterElement.textContent = counter;
}

// Add an event listener to the incrementButton to call the incrementCounter function when clicked
incrementButton.addEventListener("click", incrementCounter);
