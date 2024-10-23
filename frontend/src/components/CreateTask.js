import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    const handleCreateTask = async (e) => {
        e.preventDefault();
        const task = { title, description, status };

        try {
            const response = await axios.post('http://localhost:8080/tasks', task);
            setMessage(`Task "${response.data.title}" created successfully!`);
            setTitle('');
            setDescription('');
            setStatus('');
        } catch (error) {
            setMessage('Error creating task.');
        }
    };

    return (
        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleCreateTask}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <button type="submit">Create</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateTask;