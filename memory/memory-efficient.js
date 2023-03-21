// This function creates a big array and returns an element based on the index.
// This array is created every time this function is called.
function heavyDuty(index) {
  const bigArray = new Array(7000).fill("😃");
  console.log("created!");
  return bigArray[index];
}

// Here, the same element is returned multiple times by calling the function multiple times.
// Each time, the bigArray is created again, leading to poor performance.
console.log(heavyDuty(688));
console.log(heavyDuty(688));
console.log(heavyDuty(688));

// This function is similar to the previous one, but instead of returning an element directly,
// it returns a new function that takes an index and returns an element from the bigArray.
// The bigArray is created only once when heavyDuty2 is called, resulting in better performance.
function heavyDuty2() {
  const bigArray = new Array(7000).fill("😃");
  console.log("created Again!");

  // The inner function returned from heavyDuty2 has access to the bigArray variable,
  // even though it is out of scope. This is possible because of closures.
  return function (index) {
    return bigArray[index];
  };
}

// Here, getHeavyDuty is assigned the inner function returned from heavyDuty2,
// and this function is called multiple times with the same index.
// Since the bigArray is created only once, the performance is much better.
const getHeavyDuty = heavyDuty2();
console.log(getHeavyDuty(688));
console.log(getHeavyDuty(688));
console.log(getHeavyDuty(688));
