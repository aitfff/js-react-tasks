import React from 'react';
import PropTypes from 'prop-types';
// BEGIN (write your solution here)
const ListGroup = ({ children }) => {
    return (
      <ul className="list-group">
        {React.Children.map(children, (child) => (
          <li className="list-group-item">{child}</li>
        ))}
      </ul>
    );
  };
  
  ListGroup.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default ListGroup;
// END
