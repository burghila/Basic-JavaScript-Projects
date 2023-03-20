// Declare the 'mesaj' variable and assign the string "Hello" to it
var mesaj = "Hello";
// Display a browser alert with the content of the 'mesaj' variable
window.alert(mesaj);
// Change the innerHTML of the HTML element with the id "mesaj" to the content of the 'mesaj' variable
document.getElementById("mesaj").innerHTML = mesaj;

// Declare the 'mesaj2' variable and assign a string containing a quote and escaped single quotes
var mesaj2 = 'John said, "I can\'t believe it\'s already Monday!"';
// Declare three color variables and assign them color strings
var color1 = "red";
var color2 = "green";
var color3 = "blue";
// Write a paragraph to the document with text in the specified color using the fontcolor() method
document.write("<p>This text is ".fontcolor(color1) + "red!</p>");
document.write("<p>This text is ".fontcolor(color2) + "green!</p>");
document.write("<p>This text is ".fontcolor(color3) + "blue!</p>");

// Declare variables for price, quantity, and total, and calculate the total as price * quantity
var price = 10;
var quantity = 5;
var total = price * quantity;

// Log the total value to the console
console.log(total);

// Change the innerHTML of the HTML element with the id "total" to the calculated total value
document.getElementById("total").innerHTML = total;
