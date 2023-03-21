import { createExpensiveCalculation } from "./cache";

describe("createExpensiveCalculation", () => {
  it("should return the correct calculation result with caching", () => {
    const expensiveCalculation = createExpensiveCalculation();

    // First call should calculate and return the result of 2 * 2
    expect(expensiveCalculation(2)).toEqual(4);

    // Second call with the same input should return the cached result of 4
    expect(expensiveCalculation(2)).toEqual(4);

    // Third call with a different input should calculate and return the result of 3 * 3
    expect(expensiveCalculation(3)).toEqual(9);

    // Fourth call with the same input as the previous one should return the cached result of 9
    expect(expensiveCalculation(3)).toEqual(9);

    // Create a new instance of createExpensiveCalculation to ensure each function has its own cache
    const expensiveCalculation2 = createExpensiveCalculation();

    // Call the first function with the same input, should calculate and return the result of 2 * 2
    expect(expensiveCalculation(2)).toEqual(4);

    // Call the second function with the same input, should calculate and return the result of 2 * 2 (not cached)
    expect(expensiveCalculation2(2)).toEqual(4);
  });
});
