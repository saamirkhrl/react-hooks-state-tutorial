import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Substract
      </button>
    </div>
  );
}

export default App;
