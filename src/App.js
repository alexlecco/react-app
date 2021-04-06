import React, { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        Count: {state}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </header>
    </div>
  );
}

export default App;
