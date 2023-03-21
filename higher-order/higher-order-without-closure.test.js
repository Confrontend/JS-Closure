import { addErrorLogging, divide } from "./higher-order-without-closure";

describe("addErrorLogging", () => {
  it("should log errors and re-throw them", () => {
    const consoleLogSpy = jest.spyOn(console, "error");
    expect(() => addErrorLogging(divide.bind(null, 10, 0))).toThrow(
      "Cannot divide by zero."
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Error occurred: Cannot divide by zero."
    );
  });

  it("should not log or re-throw when function is successful", () => {
    const consoleLogSpy = jest.spyOn(console, "log");
    addErrorLogging(divide.bind(null, 10, 2));
    expect(consoleLogSpy).toHaveBeenCalledWith("result: 5");
  });
});
