// Declare global variable
    let globalVar = "I'm a global variable";

    // Declare local variable inside a function
    function localVarFunc() {
      let localVar = "I'm a local variable";
      displayOutput(localVar);
    }

    // Function that includes an if statement
    function checkNum(num) {
      if (num > 10) {
        displayOutput("The number is greater than 10.");
      } else {
        displayOutput("The number is 10 or less.");
      }
    }

    // Intentionally write a function with an error and use console.log() for debugging
    function buggyFunc() {
      try {
        let a = 10;
        let b = 0;
        let result = a / b;
        displayOutput(result);
      } catch (error) {
        displayOutput("An error occurred: " + error);
      }
    }

    // Time_function as outlined in previous slides
    function timeFunction() {
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      
      let timeString = `Current time: ${hour}:${minute}:${second}`;
      displayOutput(timeString);
    }

    // Function to display output on the web page
    function displayOutput(message) {
      let outputElement = document.getElementById("output");
      outputElement.innerHTML += message + "<br>";
    }
	
	    // Function to run all other functions when the button is clicked
    function runFunctions() {
      localVarFunc();
      checkNum(15);
      buggyFunc();
      timeFunction();
    }
