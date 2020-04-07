import React, { Component } from "react";

class LessText extends Component {
    state = {
      lengthOfText: this.props.maxLength //this does work (giving me less reason to deconstruct if i cant access the deconstructd value to set initial value)
      //lengthOfText: maxLength //This doesnt work even though i deconstructed
    };

    setLength = (len) => {
      this.setState({lengthOfText: len});
    }

    render() {
        const { text, maxLength } = this.props; // destructured props
        return (
          <div className="container mt-4 h1">
            <h3>LessText</h3>
            <p>{text.substring(0, this.state.lengthOfText)}</p>
            <button onClick={() => this.setLength(maxLength)}>Read Less</button>
            <button onClick={() => this.setLength(text.length)}>Read More</button> 
          </div>
        );
      }
};
 
export default LessText;