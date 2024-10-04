import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';


const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

class App extends React.Component {
  // BEGIN (write your solution here)
  constructor(props) { 
    super(props); 
    this.state = { 
      activeTheme: themes[0].className, 
    }; 
  } 

  handleThemeChange = (themeId) => { 
    const selectedTheme = themes.find(theme => theme.id === themeId); 
    if (selectedTheme) { 
      this.setState({ activeTheme: selectedTheme.className }); 
    } 
  }; 

  render() { 
    const contextValue = { 
      themes, 
      activeTheme: this.state.activeTheme, 
      handleThemeChange: this.handleThemeChange, 
    }; 

    return ( 
      <ThemeContext.Provider value={contextValue}> 
        <ThemeSwitcher /> 
        <Tabs> 
          <Tab eventKey="login" title="Login"> 
            <Home /> 
          </Tab> 
          <Tab eventKey="registration" title="Registration"> 
            <Profile /> 
          </Tab> 
        </Tabs> 
      </ThemeContext.Provider> 
    ); 
  } 
  // END
}

export default App;
