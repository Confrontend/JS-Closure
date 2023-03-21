import React from "react";

export function App() {
  const [increment, value] = useIncrement();
  const [incrementStale, valueStale] = useIncrementStale();

  increment();
  increment();
  increment();
  incrementStale();
  incrementStale();
  incrementStale();

  return (
    <>
      {/* Using stale closure */}
      <div data-testid="stale-value">{valueStale()}</div>

      {/* Using updated closure */}
      <div data-testid="working-value">{value()}</div>
    </>
  );
}

function useIncrement() {
  let value = 0;

  function increment() {
    value++;
  }

  function getValue() {
    // The `getValue` function closes over the `value` variable,
    // which means that it captures the current value of `value`.
    // Since `getValue` is returned from `useIncrement`,
    // it maintains a reference to the original `value` variable
    // even after the `useIncrement` function has returned.
    let message = `The value is: ${value}`;
    return message;
  }

  return [increment, getValue];
}

function useIncrementStale() {
  let value = 0;
  let message = `The value is: ${value}`;

  function increment() {
    // Here, we update the `value` variable,
    // but the `getValue` function has already been created
    // and still closes over the old value of `value`.
    value++;
  }

  function getValue() {
    // When `getValue` is called, it returns the old value of `value`
    // that was captured when the function was created,
    // resulting in a stale closure.
    return message;
  }

  return [increment, getValue];
}
