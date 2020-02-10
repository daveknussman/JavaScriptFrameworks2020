import React from "react";
import "./App.css";
import Welcome from "./components/Welcome.jsx"

function App() {
  // return <div className="App">{welcome('Dave')}{welcome(' ')}</div>;
  return <div className="App"><Welcome name='Dave'/><Welcome/></div>;
}

export default App;