import React from "react";
import todos from "./data/todos";
import ToDo from "./components/ToDo/ToDo";

console.log(ToDo);
function App() {
  return <div className="App">{<ToDo todos={todos} showCompleted={true} />}</div>;
}

export default App;
