

import React, {useState} from 'react';

const UseState = () => {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);

    return (
        <div>
            <button onClick={() => {
                setCount(count + 1);
                setShowText(!showText);
            }}>
                Click Here
            </button>
            <h1>{count}</h1>

            <p>{showText ? 'even' : 'odd'}</p>
        </div>
    )
};

export default UseState;