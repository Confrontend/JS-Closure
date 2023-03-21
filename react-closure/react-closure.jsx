import React, { useState } from "react";

export function Counter() {
  const [countClosure, setCount] = useState(0);

  function increment() {
    setCount(countClosure + 1);
  }

  return (
    <div>
      <p>Count: {countClosure}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
