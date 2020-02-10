import React from 'react';

const welcome = (name) => {
    // console.log(name);
    if (name !== ' ')
        return <div><p>{'Welcome ' + name}</p></div>
    else
        return <div><p>Welcome User</p></div>;
}

export default welcome;