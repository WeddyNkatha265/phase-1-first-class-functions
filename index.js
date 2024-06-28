function receivesAFunction(callback) {
  // Call the callback function that's passed as an argument
  callback();
}

function returnsANamedFunction() {
  // Define and return a named function
  function sayHello() {
    console.log("Hello!");
  }
  return sayHello;
}

function returnsAnAnonymousFunction() {
  // Return an anonymous function using an arrow function
  return () => console.log("Hi there!");
}

// Example usage
receivesAFunction(function () {
  console.log("This is a callback function!");
});

const returnedFunction = returnsANamedFunction();
returnedFunction(); // This will call the returned function

returnsAnAnonymousFunction()(); // Call the anonymous function directly
