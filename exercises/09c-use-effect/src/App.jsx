// import useEffect
import React, { useState, useEffect  } from "react";
import "./App.css";
import axios from "axios";


function App() {

  const [characters, setCharacters] = useState([]);

  const [image, setImage] = useState("https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg");

  const [name, setName] = useState("Rick and his Friends");

  useEffect(() => {
  axios({
    url: "https://rickandmortyapi.com/api/character",
    method: "GET",
    headers: {
        "Content-Type": "applictation/json" // e.g.
    },
    body: JSON.stringify({ 
    })
  })
  .then(response => {
      // response.data.results.forEach((curValue)=>{
        // dropdown.options.add( new Option(curValue.name, curValue.id));
        setCharacters(response.data.results);
    })  
  .catch(() => {
    // alert('error calling API for dropdown load!!!')
    setName('Error calling API for dropdown!!!');
    });
  }, []); 

  const getSelected = charId => {
    // alert(characterId);
    axios({
      url: "https://rickandmortyapi.com/api/character/" + charId,
      method: "GET",
      headers: {
          "Content-Type": "applictation/json" // e.g.
      },
      body: JSON.stringify({ 
      })
    })
    .then(response => {
      // alert('got character');
      // console.log(response.data.name);
      // console.log(response.data.image);
      setImage(response.data.image);
      setName(response.data.name);
    })  
    .catch(() => {
      // alert('error calling API for get selected!!!')
      setName('Error calling API for get selected!!!');
      });
  }; 

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            <img
              alt={name}
              src={image}
              height="250"
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            <select id="dropdown" type="text" onChange={e => getSelected(e.target.value)}>
              <option></option>
              {characters.map(character => (
                <option value={character.id} key={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
