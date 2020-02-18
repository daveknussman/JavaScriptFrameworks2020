import React, {useState} from "react";

const CharacterCount = () => {
    const [charCount, setCharCount] = useState(0);
    return (
            <div>
                <textarea className='textCounter' onChange={(e) => setCharCount(e.target.value.length)}></textarea>
                <p>Character Count {charCount}</p>
            </div>
     );
}

export default CharacterCount;