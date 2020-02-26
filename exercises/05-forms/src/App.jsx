import React , { useState } from "react";
// import React  from "react";
import "./App.css";
import countries from "./assets/countries.json";
import states from "./assets/states.json";

function App() {

  // Values changing on screen
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: ""
  });
  const handleChange = e => {
      // console.log(e.target);
      // the set values is setting an object (which will be values becuase of the useState above) by doing a spread on values to make a copy of the object to retain whats already in there and then creating/updating the item with what is being passed
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  // form submitting 
  const [displayResults, setDisplayResults] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    setDisplayResults(true);
  };


  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      {/* You will need to handle form submission */}
      <div className="form-group">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          value={values.address}
          onChange={handleChange}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city" name="city" type="text" className="form-control" value={values.city}
          onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select id="state" name="state" className="form-control" value={values.state}
          onChange={handleChange}> 
          {states.map(item => <option key={item} value={item}>{item}</option>)}/>
        </select>
         </div>

      <div className="form-group">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          value={values.postalCode}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select id="country" name="country" className="form-control" value={values.country}
          onChange={handleChange}>  
           {countries.map(item => <option key={item} value={item}>{item}</option>)}/>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {displayResults && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {Object.values(values).map((value, idx) => {
              return <li key={`value-${idx}`}>{value}</li>;
            })}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
