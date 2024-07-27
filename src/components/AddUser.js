import React, { useState } from 'react'; 
import api from '../api/axios'; 


const AddUser = () =>{
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) =>{

        event.preventDefault();

        try{
            await api.post('users/create/', {email});
            setEmail('');
            alert('User added successfully!');
        }catch(err){
            console.error(err);
            alert('Failed to add user'); 
        }

    };

    return(

        <div>
            <h1></h1>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                />

                <button type="submit">Add User</button>

            </form>

        </div>

    );
};

export default AddUser;
