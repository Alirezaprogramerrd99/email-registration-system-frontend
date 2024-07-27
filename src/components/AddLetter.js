import React, { useState, useEffect } from 'react';
import api from '../api/axios'; 


const AddLetter = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.post('/letters/create', { title, content });
            setContent('');
            setTitle('');
            alert('Letter added successfully!');
        } catch (err) {
            console.error(err); 
            alert('Failed to add letter'); 
        }
    };

    return (
        <div>
            <h2>Add Letter</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="title"
                    required
                />
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="content"
                    required
                />
                
                <button className= "op-button" type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddLetter;