import React, { useState } from "react";
import Wheel from "./components/wheel";

function App() {
  const [result, setResult] = useState("");

  return (
    <div>
      <h1>Ruleta del Destino 🎰</h1>
      <Wheel onResult={setResult} />
      {result && <h2>Resultado: {result}</h2>}
    </div>
  );
}

export default App;

