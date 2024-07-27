import React, { useState, useEffect } from 'react';
import api from '../api/axios'; 

const LetterList = () =>{
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        
        const fetchLetters = async () =>{

            try{
                const response = await api.get('/letters/read');
                console.log(response.data);
                setLetters(response.data);

            }catch(err){
                console.error(err)
            }

    };

    fetchLetters();
    
    }, []);

    return(
        <div>
        <h2>Letter List</h2>
        <ul>
            {letters.map((letter) => (
                <li key={letter.id}>{letter.title}</li>
            ))}
        </ul>
    </div>
    );

};

export default LetterList