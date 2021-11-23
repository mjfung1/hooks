import React, { useLayoutEffect, useEffect, useRef } from 'react';

const UseLayoutEffect = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = 'Angel'
    }, []);

    useLayoutEffect(() => {
        console.log(inputRef.current.value)
    }, []);


    return (
        <div>
            <input ref={inputRef} value='Miguelvdasfafdfdasfadsfdasa' style={{height: 50, width: 400}}/>
        </div>
    )
};

export default UseLayoutEffect;