// Function that uses a while loop to display numbers from 1 to n
function displayNumbersWithWhileLoop(n) {
    let result = "";
    let i = 1;

    while (i <= n) {
        result += i + " ";
        i++;
    }

    return result;
}

// Function that uses a for loop to display numbers from 1 to n
function displayNumbersWithForLoop(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        result += i + " ";
    }

    return result;
}

// Function that uses an array to display its elements
function displayArrayElements(arr) {
    let result = "";

    for (let element of arr) {
        result += element + " ";
    }

    return result;
}

// Call the functions and display the results
document.getElementById("whileLoopResult").innerHTML = displayNumbersWithWhileLoop(5);
document.getElementById("forLoopResult").innerHTML = displayNumbersWithForLoop(5);

let sampleArray = [1, 2, 3, 4, 5];
document.getElementById("arrayFunctionResult").innerHTML = displayArrayElements(sampleArray);


