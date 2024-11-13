import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    if (count < 20) {
      setCount(count + 1);
      console.log(count);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Vite + React</h1>
      <p>Count is {count}</p>
      <div className="mt-5">
        <button onClick={handleIncrease} className="btn btn-warning mr-5">
          Increase
        </button>
        <button onClick={handleDecrease} className="btn btn-warning">
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
