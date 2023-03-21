/* 
    The function debounceUsingClosure is using closure to keep track of its timeoutId variable,
    which makes it independent and isolated from any other instance of the same function. 
    This means that if multiple instances of the function are used at the same time, 
    each instance will have its own timeoutId and won't interfere with the others.
 */
export function debounceUsingClosure(func, delay) {
  let timeoutId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

let timeoutIdGlobal;
/* 
    On the other hand, the function debounceGlobal is using a global variable to keep track of its timeoutId, 
    which makes it shared among all instances of the function. 
    This means that if multiple instances of the function are used at the same time, 
    they will all be using the same timeoutId and may interfere with each other, potentially causing unexpected behavior.
 */
export function debounceGlobal(func, delay) {
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutIdGlobal);

    timeoutIdGlobal = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
