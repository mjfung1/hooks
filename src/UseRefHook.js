import React, { useRef } from 'react';



const UseRefHook = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        console.log(inputRef)
        // inputRef.current.focus();
    };

    return (
        <div>
            <h1>Miguel</h1>
            <input type='text' placeholder='type name here' ref={inputRef} />
            <button onClick={handleClick}>change name</button>
        </div>
    )
};

export default UseRefHook;