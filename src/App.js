import { useState } from "react";
import "./styles.css";

export default function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    setAdvice(data.slip.advice);
  }

  return (
    <div className="App">
      <p className="advice">Advice {advice}</p>
      <button className="btn" onClick={getAdvice}>
        Next Advice!
      </button>
    </div>
  );
}
