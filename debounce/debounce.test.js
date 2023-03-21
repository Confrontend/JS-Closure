import { debounceGlobal, debounceUsingClosure } from "./debounce";

describe("debounce", () => {
  jest.useFakeTimers();
  it("debounceGlobal should not interfere with multiple instances but it does", () => {
    let count1 = 0;
    let count2 = 0;

    // Create two instances of the debounced function with different delays
    const debouncedFunc1 = debounceGlobal(() => {
      count1++;
    }, 100);
    const debouncedFunc2 = debounceGlobal(() => {
      count2++;
    }, 200);

    // Call both debounced functions immediately
    debouncedFunc1();
    debouncedFunc2();

    // Wait for the longest delay (200ms) to ensure both functions have executed
    jest.advanceTimersByTime(200);

    // Expect count1 to be 1 but since debouncedFunc2 interfered with it it is 0
    expect(count1).toBe(0);
  });

  it("should debounce two instances separately", () => {
    let count1 = 0;
    let count2 = 0;

    const debouncedFunc1 = debounceUsingClosure(() => {
      count1++;
    }, 100);

    const debouncedFunc2 = debounceUsingClosure(() => {
      count2++;
    }, 100);

    // Call debouncedFunc1 and debouncedFunc2 immediately
    debouncedFunc1();
    debouncedFunc2();

    // Call debouncedFunc1 and debouncedFunc2 again within the debounce time
    debouncedFunc1();
    debouncedFunc2();

    expect(count1).toBe(0); // debouncedFunc1 hasn't been called yet
    expect(count2).toBe(0); // debouncedFunc2 hasn't been called yet

    // Wait for the debounce time
    jest.advanceTimersByTime(100);

    expect(count1).toBe(1); // debouncedFunc1 was called once
    expect(count2).toBe(1); // debouncedFunc2 was called once
  });
});
