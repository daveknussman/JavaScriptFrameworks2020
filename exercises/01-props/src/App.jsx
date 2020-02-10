import React from "react";
import "./App.css";
import welcome from "./components/Welcome.jsx"

function App() {
  return <div className="App">{welcome('Dave')}{welcome(' ')}</div>;
}

export default App;