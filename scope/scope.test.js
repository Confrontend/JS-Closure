import { outerFunction } from "./scope";

describe("outerFunction", () => {
  it("should access variables defined in outer and inner functions", () => {
    const mockLog = jest.fn();
    console.log = mockLog;

    // Call the outer function
    outerFunction();

    // Assert that the console outputs are as expected
    expect(mockLog).toHaveBeenCalledWith("I'm defined in outerFunction");
    expect(mockLog).toHaveBeenCalledWith("I'm defined in outerFunction");

    // Restore the original console.log function
    console.log.mockRestore();
  });

  it("should throw a ReferenceError when accessing innerVar outside of its scope", () => {
    try {
      // Attempt to access innerVar outside of its scope
      outerFunction();
      console.log(innerVar);
    } catch (error) {
      // Assert that the caught error is a ReferenceError
      expect(error).toBeInstanceOf(ReferenceError);
    }
  });
});
