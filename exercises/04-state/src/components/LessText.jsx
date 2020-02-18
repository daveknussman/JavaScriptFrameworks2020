import React, {useState} from "react";

const LessText = ({text, maxLength}) => {
    // console.log('called');
    const [showLess, setShowLess] = useState(false);
  if (showLess)
         return (
          <div>
            <p>{text.substring(0,maxLength)}</p>
            <button className="btnMore" onClick={() => setShowLess(false)}>Read More</button>
          </div>
    )
    else 
        return (
            <div>
                <p>{text}</p> 
                <button className="btnLess" onClick={() => setShowLess(true)}>Read Less</button>
            </div>
    );
  }

export default LessText;