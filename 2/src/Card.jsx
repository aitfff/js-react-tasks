import React from 'react';

// BEGIN (write your solution here)
const getCard = ({ title, text }) => {
    if (!title && !text) {
      return null;
    }
  
    return (
      <div className="card">
        <div className="card-body">
          {title && <h4 className="card-title">{title}</h4>} {/* Отрисовка заголовка, если он есть */}
          {text && <p className="card-text">{text}</p>}       {/* Отрисовка текста, если он есть */}
        </div>
      </div>
    );
  };
  
  export default getCard;
// END
