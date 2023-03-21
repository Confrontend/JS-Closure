import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import { Counter } from "./react-closure";

describe("Counter", () => {
  test("displays the count and increments it when the button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    const countElement = screen.getByText(/count: 2/i);
    expect(countElement.innerHTML).toBe("Count: 2");
  });
});
