

import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1, showText: state.showText};
        case 'TOGGLESHOWTEXT':
            return {count: state.count, showText: !state.showText};
        default: 
            return state;
    }
};

const UseReducer = () => {
    const [ state, dispatch ] = useReducer(reducer, {count: 0, showText: true});

    return (
        <div>
            <button onClick={() => {
                dispatch( {type: 'INCREMENT'} );
                dispatch( {type: 'TOGGLESHOWTEXT'} );
            }}>
                Click Here
            </button>
            <h1>{state.count}</h1>

            <p>{state.showText ? 'even' : 'odd'}</p>
        </div>
    )
};

export default UseReducer;