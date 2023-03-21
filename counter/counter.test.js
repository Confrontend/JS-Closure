import { counter } from "./counter";

describe("counter", () => {
  it("should increment and log the count", () => {
    // Mock the console.log function
    const mockLog = jest.fn();
    console.log = mockLog;

    // Call the counter function and the returned increment function
    const myCounter = counter();
    myCounter();
    myCounter();
    myCounter();

    // Assert that the console outputs are as expected
    expect(mockLog).toHaveBeenCalledWith(1);
    expect(mockLog).toHaveBeenCalledWith(2);
    expect(mockLog).toHaveBeenCalledWith(3);

    // Restore the original console.log function
    console.log.mockRestore();
  });
});
