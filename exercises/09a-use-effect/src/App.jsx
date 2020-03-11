// Import useEffect here
import React, { useState, useEffect  } from "react";
import "./App.css";
import axios from "axios";

function App() {
  /**
   * Set up your state
   */
  const [quote, setQuote] = useState('Loading...');
  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes") 
    // wrong URL below for testing error condition trapping in the catch
    // axios("https://ron-swanson-quotes.herokuapp.com/v2/quottes") 
      .then(response => {
        // console.log(response.data[0]); 
        setQuote(response.data[0]);

      })
      .catch(() => {
        setQuote('Error loading API data'); 
      });
      // console.log("next call");
      // axios("https://michael-scott-quotes.herokuapp.com/quote") 
      //   .then(response => {
      //     console.log(response); 
      //   });
  }, []); 
  return (
    <body class="bg-warning text-center">
    <img
      src="https://res.cloudinary.com/lando726/image/upload/v1466479089/ronswanson_gkopu4.png"
      alt=""
      width="450"
      height="423"
      class="mt-4"
    />
    <div class="container">
      {/* Display an error message if the API fails */}
      <blockquote
        id="quote"
        class="blockquote bg-dark text-white border-0 mb-4"
      >
        {quote}
      </blockquote>
    </div>
  </body>
  );
}

export default App;
