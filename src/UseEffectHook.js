import React, {useEffect, useState} from 'react';

const UseEffectHook = () => {
    const [email, setEmail] = useState('');
    const [count, setCount] = useState(0);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            let randomIdx = ~~(Math.random() * data.length);
            let randomEmail = data[randomIdx];
            setEmail(randomEmail.email);
        })
        
    }, [ count ])
    

    return (
        <div>
            {email}
            <br />
            {count}
            <br />
            <button onClick={() => setCount(count+1)}>
                increase count
            </button>
        </div>
    )
};

export default UseEffectHook;