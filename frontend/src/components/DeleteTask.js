import React, { useState } from 'react';
import axios from 'axios';

const DeleteTask = () => {
    const [taskId, setTaskId] = useState('');
    const [message, setMessage] = useState('');

    const handleDeleteTask = async (e) => {
        e.preventDefault();

        try {
            await axios.delete(`http://localhost:8080/tasks/${taskId}`);
            setMessage(`Task with ID ${taskId} deleted successfully!`);
            setTaskId('');
        } catch (error) {
            console.error('Error deleting task:', error);
            setMessage('Error deleting task. Task may not exist.');
        }
    };

    return (
        <div>
            <form onSubmit={handleDeleteTask}>
                <input
                    type="text"
                    placeholder="Task ID"
                    value={taskId}
                    onChange={(e) => setTaskId(e.target.value)}
                    required
                />
                <button id="del_button" type="submit">Delete</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteTask;