import React from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import SearchTask from "./components/SearchTask";
import DeleteTask from "./components/DeleteTask";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>To-Do List</h1>
                <CreateTask />
                <SearchTask />
                <DeleteTask />
            </header>
        </div>
    );
}

export default App;