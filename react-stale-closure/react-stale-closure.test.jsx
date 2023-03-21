import { render, screen } from "@testing-library/react";
import React from "react";
import { App } from "./react-stale-closure";

describe("react stale closure", () => {
  it("should use updated value", () => {
    render(<App />);

    const workingValue = screen.getByTestId("working-value");
    expect(workingValue.innerHTML).toBe("The value is: 3");
  });

  it("should use stale value which is not updated due to closure issue", () => {
    render(<App />);

    const staleValue = screen.getByTestId("stale-value");
    expect(staleValue.innerHTML).toBe("The value is: 0");
  });
});
