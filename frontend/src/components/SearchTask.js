import React, { useState } from 'react';
import axios from 'axios';

const SearchTask = () => {
    const [taskId, setTaskId] = useState('');
    const [task, setTask] = useState(null);
    const [message, setMessage] = useState('');

    const handleSearchTask = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:8080/tasks/${taskId}`);
            setTask(response.data);
            setMessage('');
        } catch (error) {
            console.error('Error searching task:', error);
            setMessage('Task not found.');
            setTask(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearchTask}>
                <input
                    type="text"
                    placeholder="Task ID"
                    value={taskId}
                    onChange={(e) => setTaskId(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>
            {message && <p>{message}</p>}
            {task && (
                <div>
                    <h3>Task Details</h3>
                    <p>Title: {task.title}</p>
                    <p>Description: {task.description}</p>
                    <p>Status: {task.status}</p>
                </div>
            )}
        </div>
    );
};

export default SearchTask;