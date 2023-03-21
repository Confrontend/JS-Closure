export function counter() {
  var count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  return increment;
}
var myCounter = counter();
myCounter(); // Output: 1
myCounter(); // Output: 2
myCounter(); // Output: 3
