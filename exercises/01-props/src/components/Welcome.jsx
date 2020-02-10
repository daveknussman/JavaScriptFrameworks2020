import React from 'react';

// const Welcome = (name) => {
//     if (name !== ' ')
//         return <div><p>{'Welcome ' + name}</p></div>
//     else
//         return <div><p>Welcome User</p></div>;
// }

const Welcome = ({name='User'}) => {
    console.log(name);
        return <div><p>Welcome {name}</p></div>;
}

export default Welcome;