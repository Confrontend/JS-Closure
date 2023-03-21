export const fetchAccess = () => true;

export function checkUserAccess(userId) {
   // hasAccess is private and won't pollute the global name
  let hasAccess = false;

  hasAccess = fetchAccess();

  // Return a function that can be used to check access without exposing implementation details
  return function () {
    return hasAccess;
  };
}

var userAccess = checkUserAccess("12345");

console.log(userAccess()); // Output: true
