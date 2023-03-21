export function addErrorLogging(fn) {
  const args = arguments
     try {  
       return fn.apply(this, args);
     } catch (error) {
       console.error(`Error occurred: ${error.message}`);
       throw error;
     }
 }
 
 export function divide(a, b) {
   if (b === 0) {
     throw new Error("Cannot divide by zero.");
   }
    console.log('result: ' + a / b)
   return a / b;
 }
 
/**
 * loggedDivide is tightly coupled to divide. If the implementation details of divide changes,
 * then usage of loggedDivide has to be changed.
 * In addition, loggedDivide is not reuseable with other parameters. 
 */
const loggedDivide = addErrorLogging(divide.bind(null, 10, 2));
  