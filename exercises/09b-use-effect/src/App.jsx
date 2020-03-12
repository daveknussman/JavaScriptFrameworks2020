// Import useEffect here
import React, { useState, useEffect } from "react";
import "./App.css";
// import Axios (or use Fetch)

function App() {
  /**
   * dogImages
   * @type {Array} an array of image URLs
   * @example
   * [
   *     "https://images.dog.ceo/breeds/terrier-scottish/n02097298_7694.jpg",
   *     "https://images.dog.ceo/breeds/lhasa/n02098413_1137.jpg"
   * ]
   */
  const [dogImages, setDogImages] = useState([]);

  const [numberOfImages, setNumberOfImages] = useState(1);

  const handleChange = e => {
      // console.log(e.target.value);
      setNumberOfImages(e.target.value);
  }
  useEffect(() => {
    fetch(('https://dog.ceo/api/breeds/image/random/' + numberOfImages), {
      method: 'GET'
     })
    .then(response => response.json())
    .then(response => {
      setDogImages(response.message);
      // console.log(dogImages);
      })
    .catch(data => {
       console.log('error');
    });
  }, [numberOfImages]); 

  return (
    <div className="App">
      <h1>Dogs</h1>
      {/* Attach an event handler */}
      <select onChange={handleChange}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <div className="container">
        {dogImages &&
          dogImages.map((dogImage, idx) => {
            return <img key={`dog-${idx}`} height="200" src={dogImage} />;
          })}
      </div>
    </div>
  );
}

export default App;
