    <script>
        // Use the document.write() method and typeof operator to display the data type of a variable
        let myVariable = "This is a string";
        document.write("Data type of variable 'myVariable': " + typeof myVariable + "<br>");

        // Write an expression combining a string and a number
        let number = 42;
        let combinedExpression = "The result is: " + number;
        document.write(combinedExpression + "<br>");

        // Write code using the following operators: ==, ===, >, <, &&, ||, ! and display them in the browser
        let value1 = 5;
        let value2 = "5";

        // Comparing value1 and value2 with different operators
        document.write("value1 == value2: " + (value1 == value2) + "<br>"); // true, because they have the same value
        document.write("value1 === value2: " + (value1 === value2) + "<br>"); // false, because they have different data types

        // Using > and < operators
        document.write("value1 > value2: " + (value1 > value2) + "<br>"); // false
        document.write("value1 < value2: " + (value1 < value2) + "<br>"); // true

        // Using &&, ||, and ! operators
        let condition1 = true;
        let condition2 = false;
        document.write("condition1 && condition2: " + (condition1 && condition2) + "<br>"); // false
        document.write("condition1 || condition2: " + (condition1 || condition2) + "<br>"); // true
        document.write("!condition1: " + (!condition1) + "<br>"); // false
    </script>