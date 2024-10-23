import React, { useState } from 'react';
import { createTask } from './api.js';

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do'); // default status
    const [message, setMessage] = useState('');

    const handleCreateTask = async (e) => {
        e.preventDefault();
        const task = { title, description, status };
        try {
            const response = await createTask(task);
            setMessage(`Task "${response.data.title}" created successfully!`);
            setTitle('');
            setDescription('');
            setStatus('To Do');
        } catch (error) {
            console.error('Error creating task:', error);
            setMessage('Error creating task.');
        }
    };

    return (
        <form onSubmit={handleCreateTask}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <label style={{ marginRight: '5px' }}>
                    <input
                        type="radio"
                        value="To Do"
                        checked={status === 'To Do'}
                        onChange={(e) => setStatus(e.target.value)}
                    />
                    To Do
                </label>
                <label style={{ marginRight: '5px' }}>
                    <input
                        type="radio"
                        value="In Progress"
                        checked={status === 'In Progress'}
                        onChange={(e) => setStatus(e.target.value)}
                    />
                    In Progress
                </label>
                <label style={{ marginRight: '5px' }}>
                    <input
                        type="radio"
                        value="Done"
                        checked={status === 'Done'}
                        onChange={(e) => setStatus(e.target.value)}
                    />
                    Done
                </label>
            </div>
            <button type="submit">Create</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default CreateTask;