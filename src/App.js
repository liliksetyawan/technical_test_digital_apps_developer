import './styles.css';
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(0);

  function handleInput(e) {
    // Restrict input to whole numbers only
    const value = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-digit characters
    setNumber(value);
  }

  function handleSubmit() {
    if (number === "") {
      setResult(0);
      return;
    }

    // Reverse the number
    const reversedNumber = number.split("").reverse().join("");

    // Calculate the absolute difference
    const difference = Math.abs(parseInt(number) - parseInt(reversedNumber));

    setResult(difference);
  }

  return (
    <div className="App">
      <div>
        Number: <input value={number} onChange={handleInput} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Result value: {result}</div>
    </div>
  );
}

export default App;
