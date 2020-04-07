import React from "react";

// Import Likes here
import Likes from "./components/Likes/Likes";
// Import LessText here
import LessText from "./components/LessText/LessText";
// Import CharacterCount here
import CharacterCount from "./components/CharacterCount/CharacterCount";

function App() {
  return (
    <>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 1 - Likes</h1>
          <Likes/>
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 2 - Less Text</h2>
        <LessText text='12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890' maxLength={22}/>
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          <CharacterCount/>
        </div>
      </div>
    </>
  );
}

export default App;
