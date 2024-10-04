import ReactDOM from 'react-dom/client';
import React from 'react';

import Card from './Card.jsx';

// BEGIN (write your solution here)
const App = () => {
    return (
      <div>
        <Card />
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
// END
