import React from 'react';
import './App.css';
import CreateTask from './components/CreateTask';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>To-Do List</h1>
                <CreateTask />
            </header>
        </div>
    );
}

export default App;