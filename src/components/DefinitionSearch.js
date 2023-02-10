import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function DefinitionSearch() {
    const [word, setWord] = useState('');
    const navigate = useNavigate();
    
    /*useEffect(()=> {
        console.log('state Update ', word )
    }, [word]); 
    useEffect(()=> {
        console.log('state Update ',  word1)
    }, [word1]); 
    */
    // Limit what state useEffect cares about -> dependancy array
    // 3 different ways to using useEffect
    // 1. no dependancy array -> it will update for any state change 
    // 2. empty dependency array -> execute once
    // 3. Passing in data -> only execute when those state variable are changed
    return (
       
        <form className='flex space-between space-x-2 max-w-[300px]' 
        onSubmit={() =>{
            navigate('/dictionary/' + word)
        }}>
            <input
                className='shrink min-w-0 px-2 py-1 rounded' 
                placeholder='Search Word'
                type='text' 
                onChange={(e) =>{ 
                    setWord(e.target.value) 
                }
            } />
            <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded'> Search </button>
          
        </form>

    )
}
