export function createExpensiveCalculation() {
  // Without closure, we would need to define a global cache and keep track of each
  // cache manually, which can be error-prone and difficult to maintain
  const cache = new Map();

  return function (n: number) {
    if (cache.has(n)) {
      console.log("hit", n);
      return cache.get(n);
    }
    console.log("miss", n);
    const result = n * n;
    cache.set(n, result);
    return result;
  };
}

// Create two instances of the expensive calculation function
const expensiveCalculation1 = createExpensiveCalculation();
const expensiveCalculation2 = createExpensiveCalculation();

expensiveCalculation1(2); // miss 2
expensiveCalculation1(2); // hit 2

expensiveCalculation2(2); // miss 2 -> This will miss! compare this with cache-without-closure
expensiveCalculation2(2); // hit 2
