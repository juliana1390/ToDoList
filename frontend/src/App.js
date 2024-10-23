import React, {useState} from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import SearchTask from "./components/SearchTask";
import DeleteTask from "./components/DeleteTask";
import Kanban from './components/Kanban';

function App() {
    const [showKanban, setShowKanban] = useState(false);

    const toggleKanban = () => {
        setShowKanban((prev) => !prev);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>To-Do List</h1>
                <CreateTask />
                <SearchTask />
                <DeleteTask /><button onClick={toggleKanban}>
                {showKanban ? 'Hide Tasks' : 'Show Tasks'}
            </button>
                {showKanban && <Kanban />}
            </header>
        </div>
    );
}

export default App;