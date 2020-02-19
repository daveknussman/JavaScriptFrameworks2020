import React from 'react';

// const Welcome = (name) => {
//     if (name !== ' ')
//         return <div><p>{'Welcome ' + name}</p></div>
//     else
//         return <div><p>Welcome User</p></div>;
// }

const Welcome = ({name='User', age=35}) => {
    console.log(name);
        return <div><p>Welcome {name} Age is {age}</p></div>;
}

export default Welcome;