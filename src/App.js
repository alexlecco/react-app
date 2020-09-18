import React, { useState } from "react";
import "./App.css";
import List from "./List.js";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={theme}>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
          <button onClick={() => setDark((prevDark) => !prevDark)}>
            Toggle theme
          </button>
          <List getItems={getItems} />
        </div>
      </header>
    </div>
  );
}

export default App;
