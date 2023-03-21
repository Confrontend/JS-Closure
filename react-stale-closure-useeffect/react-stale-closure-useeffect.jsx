import React, { useState } from "react";

export function App() {
  return (
    <>
      <DelayedCount />
      <DelayedCountStale />
    </>
  );
}

export function DelayedCount() {
  const [count, setCount] = useState(0);

  function handleClickAsync() {
    setTimeout(function delay() {
      // Here, we use the functional update form of `setCount`
      // React makes sure here that we always get the current value of `count`.
      // In general, use the functional update when the setter may close over an old state value.
      // When using functional updates with useState, React uses the previous state value to compute the new state, 
      // and then updates the state with the new value. 
      // If the new state value is different from the previous state value, React re-renders the component
      // So do not use functional updates if not needed
      setCount((count) => count + 1);
    }, 1000);
  }

  return (
    <div>
      <div data-testid="count">{count}</div>
      <button onClick={handleClickAsync}>Increase async</button>
    </div>
  );
}

export function DelayedCountStale() {
  const [count, setCount] = useState(0);

  function handleClickAsync() {
    setTimeout(function delay() {
      // Here, we use the old value of `count` instead of the current value,
      // resulting in a stale closure.
      setCount(count + 1);
    }, 1000);
  }

  return (
    <div>
       <div data-testid="stale-count">{count}</div>
      <button onClick={handleClickAsync}>Increase async</button>
    </div>
  );
}
