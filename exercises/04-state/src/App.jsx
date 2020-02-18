import React from "react";
import "./App.css";
import LessText from './components/LessText';
import CharacterCount from './components/CharacterCount';

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 1 - Less Text</h2>
        {<div className="App"><LessText text='DaveDaveDaveDaveDaveDaveDaveDaveDaveDave' maxLength={11}/></div>}
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          {<div className="App"><CharacterCount/></div>}
        </div>
      </div>
    </>
  );
}

export default App;
