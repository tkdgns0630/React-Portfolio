import { useState } from "react";
import "./App.css";
import Title from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Title />
    </div>
  );
}

export default App;
