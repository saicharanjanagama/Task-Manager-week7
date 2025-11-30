import React, { useState } from "react";
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <div className="App">
        <h1 style={{ marginBottom: "20px"}}>Task Manager</h1>
        <Filter setFilter={setFilter} /> {/* This allows the Filter component to tell App.js which filter is selected. */}
        <TaskInput />
        <TaskList filter={filter} />
      </div>
    </>
  );
}

export default App;
