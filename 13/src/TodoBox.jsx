import { uniqueId } from 'lodash';
import React, { useState } from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
const TodoBox = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') return;

        const newTask = {
            id: uniqueId(),
            text: inputValue,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
        setInputValue('');
    };

    const handleRemove = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <div className="mb-3">
                <form className="d-flex" onSubmit={handleSubmit}>
                    <div className="me-3">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            required
                            className="form-control"
                            placeholder="I am going..."
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">add</button>
                </form>
            </div>
            <div>
                {tasks.map((task) => (
                    <Item key={task.id} task={task.text} onRemove={() => handleRemove(task.id)} />
                ))}
            </div>
        </div>
    );
};

export default TodoBox;
// END
