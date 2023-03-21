import { addErrorLogging, divide } from "./higher-order";

describe("addErrorLogging", () => {
  it("logs error message and re-throws error", () => {
    const loggedDivide = addErrorLogging(divide);
    const consoleSpy = jest.spyOn(console, "error").mockImplementation();

    expect(() => loggedDivide(10, 0)).toThrow(Error);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Error occurred: Cannot divide by zero."
    );

    consoleSpy.mockRestore();
  });

  it("returns expected result for valid input", () => {
    const loggedDivide = addErrorLogging(divide);

    expect(loggedDivide(10, 2)).toBe(5);
  });
});
