import React, { useState, useEffect} from 'react';
export default function Dictionary() {
    const [word, setWord] = useState('');
    const [word1, setWord1] = useState('');

    useEffect(()=> {
        console.log('state Update ', word )
    }, [word]); 
    useEffect(()=> {
        console.log('state Update ',  word1)
    }, [word1]); 

    // Limit what state useEffect cares about -> dependancy array
    // 3 different ways to using useEffect
    // 1. no dependancy array -> it will update for any state change 
    // 2. empty dependency array -> execute once
    // 3. Passing in data -> only execute when those state variable are changed
    return (
        <>
            <input type='text' onChange={(e) =>
            { setWord(e.target.value) }
            } />
            <h1>Let's get the definition for {word} </h1>

            <input type='text' onChange={(e) =>
            { setWord1(e.target.value) }
            } />
            <h2>Let's get the definition for {word1} </h2>
        </>
    )
}