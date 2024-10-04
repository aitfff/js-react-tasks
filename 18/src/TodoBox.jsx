import axios from 'axios';
import React, { useState, useEffect } from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
const TodoBox = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    useEffect(() => {
      const fetchTasks = async () => {
        const response = await axios.get(routes.tasksPath());
        setTasks(response.data);
      };
  
      fetchTasks();
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!inputValue) return;
  
      const response = await axios.post(routes.tasksPath(), { text: inputValue });
      setTasks((prevTasks) => [response.data, ...prevTasks]);
      setInputValue('');
    };
  
    const handleFinishTask = async (id) => {
      const response = await axios.patch(routes.finishTaskPath(id));
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? response.data : task))
      );
    };
  
    const handleActivateTask = async (id) => {
      const response = await axios.patch(routes.activateTaskPath(id));
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? response.data : task))
      );
    };
  
    const activeTasks = tasks.filter(task => task.state === 'active');
    const finishedTasks = tasks.filter(task => task.state === 'finished');
  
    return (
      <div>
        <div className="mb-3">
          <form className="todo-form mx-3" onSubmit={handleSubmit}>
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
                className="form-control me-3"
                placeholder="I am going..."
              />
              <button type="submit" className="btn btn-primary">add</button>
            </div>
          </form>
        </div>
        <div className="todo-active-tasks">
          {activeTasks.map(task => (
            <div key={task.id} className="row">
              <div className="col-1">{task.id}</div>
              <div className="col">
                <a href="#" className="todo-task" onClick={() => handleFinishTask(task.id)}>
                  {task.text}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="todo-finished-tasks">
          {finishedTasks.map(task => (
            <div key={task.id} className="row">
              <div className="col-1">{task.id}</div>
              <div className="col">
                <s>
                  <a href="#" className="todo-task" onClick={() => handleActivateTask(task.id)}>
                    {task.text}
                  </a>
                </s>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TodoBox;
// END
