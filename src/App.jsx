import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
    <div className="counter-card">
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>

      <button onClick={() => setCount(count + 5)}>
        Increment by 5
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <button
        onClick={() => {
          if (count >= 5) {
            setCount(count - 5);
          }
        }}
      >
        Decrement by 5
      </button>

      {count === 0 && <p>Counter is at zero.</p>}
    </div>
  </div>
  );
}

export default App;