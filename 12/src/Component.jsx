import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React, { useState } from 'react';

// BEGIN (write your solution here)
const CounterComponent = () => {
    const [log, setLog] = useState([]);
    const [currentValue, setCurrentValue] = useState(0);
  
    const handleIncrement = () => {
        const newValue = currentValue + 1;
        setCurrentValue(newValue);
        setLog((prevLog) => [{ id: uniqueId(), value: newValue }, ...prevLog]);
    };
  
    const handleDecrement = () => {
        const newValue = currentValue - 1;
        setCurrentValue(newValue);
        setLog((prevLog) => [{ id: uniqueId(), value: newValue }, ...prevLog]);
    };
  
    const handleRemoveFromLog = (id) => {
        setLog((prevLog) => prevLog.filter((item) => item.id !== id));

        
        if (log.length === 1) {
            setCurrentValue(0); 
        }
    };

    return (
        <div>
            <div className="btn-group font-monospace" role="group">
                <button type="button" className="btn btn-outline-success" onClick={handleIncrement}>
                    +
                </button>
                <button type="button" className="btn btn-outline-danger" onClick={handleDecrement}>
                    -
                </button>
            </div>
            <div className="list-group">
                {log.map(({ id, value }) => (
                    <button
                        key={id} 
                        type="button"
                        className="list-group-item list-group-item-action"
                        onClick={() => handleRemoveFromLog(id)}
                    >
                        {value}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CounterComponent;
// END
