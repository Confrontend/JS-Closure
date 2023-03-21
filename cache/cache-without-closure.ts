const cache = new Map();
export function createExpensiveCalculation(n: number) {
  // Without closure, we would need to define a global cache and keep track of each
  // cache manually, which can be error-prone and difficult to maintain

  if (cache.has(n)) {
    console.log("hit", n);
    return cache.get(n);
  }
  console.log("hit", n);
  const result = n * n;
  cache.set(n, result);
  return result;
}

// Create two instances of the expensive calculation function
const expensiveCalculation1 = createExpensiveCalculation(2);
const expensiveCalculation2 = createExpensiveCalculation(2);

expensiveCalculation1(); // miss 2
expensiveCalculation2(); // hit 2