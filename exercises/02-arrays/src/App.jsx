import React from "react";
import images from "./images/images";
import "./App.css";

function App() {
  return (
    <div className="App">
      {images.map((image, index) => (
        <img src={image} alt='item'/>
      ))}
    </div>
  );
}

export default App;
