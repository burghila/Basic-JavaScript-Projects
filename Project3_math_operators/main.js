// Get HTML elements
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result = document.getElementById("result");

// Get buttons
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const moduloButton = document.getElementById("modulo");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const randomButton = document.getElementById("random");

// Function to add two numbers
function add() {
    const sum = parseFloat(number1.value) + parseFloat(number2.value);
    result.textContent = sum;
}

// Function to subtract two numbers
function subtract() {
    const difference = parseFloat(number1.value) - parseFloat(number2.value);
    result.textContent = difference;
}

// Function to multiply two numbers
function multiply() {
    const product = parseFloat(number1.value) * parseFloat(number2.value);
    result.textContent = product;
}

// Function to calculate modulo of two numbers
function modulo() {
    const remainder = parseFloat(number1.value) % parseFloat(number2.value);
    result.textContent = remainder;
}

// Function to increment the first number
function increment() {
    number1.value++;
}

// Function to decrement the second number
function decrement() {
    number2.value--;
}

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    result.textContent = randomNumber;
}

// Add event listeners for buttons
addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
moduloButton.addEventListener("click", modulo);
incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
randomButton.addEventListener("click", generateRandomNumber);

