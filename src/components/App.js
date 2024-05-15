import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [txt, setTxt] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputChange = (e) => {
    setTxt(e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault();
    const newTasks = [...tasks, txt];
    setTasks(newTasks);
    setTxt("");
  }

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <input type="text" value={txt} onChange={inputChange}></input>
      <button onClick={addTask}>Add Todo</button>
      <ul>
        {tasks.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
