import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import {
  DelayedCount,
  DelayedCountStale,
} from "./react-stale-closure-useeffect";

jest.useFakeTimers();

describe("DelayedCount", () => {
  it("should render the correct count after asynchronous increment", async () => {
    const { getByText, getByTestId } = render(<DelayedCount />);
    const countEl = getByTestId("count");
    const asyncButton = getByText("Increase async");

    expect(countEl.textContent).toBe("0");

    fireEvent.click(asyncButton);
    fireEvent.click(asyncButton);
    fireEvent.click(asyncButton);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(countEl.textContent).toBe("3");
    });

  });

  it("should render the incorrect count after asynchronous increment", async () => {
    const { getByText, getByTestId } = render(<DelayedCountStale />);
    const countEl = getByTestId("stale-count");
    const asyncButton = getByText("Increase async");

    expect(countEl.textContent).toBe("0");

    fireEvent.click(asyncButton);
    fireEvent.click(asyncButton);
    fireEvent.click(asyncButton);

    await act(async () => {
      jest.advanceTimersByTime(500);
    });

    await waitFor(() => {
      expect(countEl.textContent).toBe("1");
    });
  });
});
