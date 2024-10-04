import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
  static contextType = ThemeContext; 

  render() { 
    const { themes, activeTheme, handleThemeChange } = this.context; 

    return ( 
      <ButtonGroup className="mb-2"> 
        {themes.map(theme => ( 
          <ToggleButton 
            key={theme.id} 
            id={`toggle-check-${theme.id}`} 
            type="radio"  
            variant="secondary" 
            name="theme" 
            value={theme.id} 
            checked={activeTheme === theme.className} 
            onChange={() => handleThemeChange(theme.id)} 
          > 
            {theme.name} 
          </ToggleButton> 
        ))} 
      </ButtonGroup> 
    ); 
  } 
  // END
}

export default ThemeSwitcher;
