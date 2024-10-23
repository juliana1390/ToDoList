import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Kanban.css';

const Kanban = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:8080/tasks');
                setTasks(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching tasks:', error);
                setError('Erro ao carregar tarefas.');
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const tasksByStatus = (status) => {
        return tasks.filter((task) => task.status === status);
    };

    return (
        <div className="kanban-board">
            <h2>Tasks</h2>
            <div className="kanban-column">
                <h2>To Do</h2>
                {tasksByStatus('To Do').map((task) => (
                    <div key={task.id} className="kanban-card">
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                    </div>
                ))}
            </div>
            <div className="kanban-column">
                <h2>In Progress</h2>
                {tasksByStatus('In Progress').map((task) => (
                    <div key={task.id} className="kanban-card">
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                    </div>
                ))}
            </div>
            <div className="kanban-column">
                <h2>Done</h2>
                {tasksByStatus('Done').map((task) => (
                    <div key={task.id} className="kanban-card">
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Kanban;