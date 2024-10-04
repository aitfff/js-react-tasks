import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Profile';

class Profile extends React.Component {
  // BEGIN (write your solution here)
  static contextType = ThemeContext; 

  render() { 
    return ( 
      <article className={this.context.activeTheme}> 
        {content} 
      </article> 
    ); 
  } 
  // END
}

export default Profile;
