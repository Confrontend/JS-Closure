export function addErrorLogging(fn) {
  // returns a new function that wraps the original function and handles errors
  return function (...args) {
    try {
      return fn.apply(this, args);
    } catch (error) {
      // logs the error message
      console.error(`Error occurred: ${error.message}`);
      // re-throws the error to propagate it
      throw error;
    }
  };
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

export const loggedDivide = addErrorLogging(divide);

// console.log(loggedDivide(10, 2)); // Output: 5

// console.log(loggedDivide(10, 0)); // Output: Error occurred: Cannot divide by zero. (error thrown)
