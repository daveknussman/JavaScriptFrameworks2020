import React, {useState} from "react";
import "./AddressForm.css";
import PropTypes from "prop-types";
// Import data from "assets/countries.json" and "assets/states.json" here
import countries from "../../assets/countries";
import states from "../../assets/states";

/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - setDisplayResults()
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 * - a callback function(s) for setting first name, last name, etc.
 */
function AddressForm(props) {

  const [newFirst, setNewFirst] = useState('');
  const handleFirstChange = e => {
    setNewFirst(e.target.value);
  }

  const [newLast, setNewLast] = useState('');
  const handleLastChange = e => {
    setNewLast(e.target.value);
  }

  const [newAddr, setNewAddr] = useState('');
  const handleAddrChange = e => {
    setNewAddr(e.target.value);
  }

  const [newCity, setNewCity] = useState('');
  const handleCityChange = e => {
    setNewCity(e.target.value);
  }

  const [newState, setNewState] = useState('');
  const handleStateChange = e => {
    setNewState(e.target.value);
  }
  
  const [newZip, setNewZip] = useState('');
  const handleZipChange = e => {
    setNewZip(e.target.value);
  }

  const [newCountry, setNewCountry] = useState('');
  const handleCountryChange = e => {
    setNewCountry(e.target.value);
  }

  const updateFormData = (e) => {
    e.preventDefault();
    props.setFormData({'firstName': newFirst , 'lastName': newLast,'address': newAddr , 'city': newCity, 'state':newState , 'zip':newZip , 'country':newCountry});
  }
  // }
  /**
   * You will need to:
   * - Set the value of each <input> / <select> to something from props
   * - Use callback function(s) in props to update <App>'s state
   * - Add an event handler to handle form submission
   */
  return (
    <form className="container mt-4"  onSubmit={updateFormData}>
      <div className="form-group">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={props.formData.firstName}
          OnChange={handleFirstChange}
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
          value={props.formData.lastName}
          OnChange={handleLastChange}
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
          value={props.formData.address}
          OnChange={handleAddrChange}
        />
        <p className="help-block text-muted">
          Street address, P.O. box, company name, c/o
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city" name="city" type="text" className="form-control" value={props.formData.city} OnChange={handleCityChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select id="state" name="state" className="form-control" value={props.formData.state} OnChange={handleStateChange}>
          <option></option>
          {states.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
          })}
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
          value={props.formData.zip}
          OnChange={handleZipChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        <select id="country" name="country" className="form-control" value={props.formData.country} OnChange={handleCountryChange}>
          <option></option>
          {countries.map((state, idx) => {
            return <option key={`state-${idx}`}>{state}</option>;
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button className="btn btn-primary" onClick={() => console.log(props.formData)}>
        Log
      </button>
    </form>
  );
}

AddressForm.propTypes = {
  setDisplayResults: PropTypes.func.isRequired
  // And others that you will need to pass in
};

export default AddressForm;
