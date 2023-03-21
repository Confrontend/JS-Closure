export function outerFunction() {
  var outerVar = "I'm defined in outerFunction";
  function innerFunction() {
    var innerVar = "I'm defined in innerFunction";
    console.log(outerVar); // outputs "I'm defined in outerFunction" console.log(innerVar); // outputs "I'm defined in innerFunction"
  }
  innerFunction();
  console.log(outerVar); // outputs "I'm defined in outerFunction"
  // console.log(innerVar); // throws a ReferenceError, as innerVar is not defined in this scope
}
outerFunction();
