// Ternary operator function that checks if a number is even or odd
function checkNumber() {
  const numberInput = document.getElementById("number-input").value;
  const result = (numberInput % 2 === 0) ? "even" : "odd";
  document.getElementById("result").innerHTML = `The number is ${result}.`;
}

// Constructor function that creates a person object with name and age properties
function Person(name, age) {
  this.name = name;
  this.age = age;
  
  this.introduce = function() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Nested function that uses the Person constructor to create a new object and display its properties
function createPerson(name, age) {
  const person = new Person(name, age);
  
  function displayPerson() {
    const output = document.createElement("p");
    output.innerHTML = person.introduce();
    document.body.appendChild(output);
  }
  
  displayPerson();
}

// Example usage of the createPerson function
createPerson("John Doe", 30);
