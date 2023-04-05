// Function to concatenate two strings using concat() method
function concatStrings() {
    const str1 = 'Hello';
    const str2 = 'World!';
    const result = str1.concat(' ', str2);

    // Display the result in the HTML element with ID 'result'
    document.getElementById('result').innerHTML = result;
}

// Function to slice a string using slice() method
function sliceString() {
    const str = 'I am a simple string.';
    const result = str.slice(7, 13);

    // Display the result in the HTML element with ID 'result'
    document.getElementById('result').innerHTML = result;
}

// Function to convert a number to a string using toString() method
function toStringNumber() {
    const num = 42;
    const result = num.toString();

    // Display the result in the HTML element with ID 'result'
    document.getElementById('result').innerHTML = result;
}

// Function to format a number with a specified precision using toPrecision() method
function toPrecisionNumber() {
    const num = 3.14159;
    const precision = 3;
    const result = num.toPrecision(precision);

    // Display the result in the HTML element with ID 'result'
    document.getElementById('result').innerHTML = result;
}
