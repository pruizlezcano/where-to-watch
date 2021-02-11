import React from 'react';
import Main from './components/Main/index';
import NavBar from './components/NavBar/index';
import Logo from './components/Logo/index';
import useDarkMode from 'use-dark-mode';

function App() {
  const darkMode = useDarkMode(false);
  return (
    <div className="App">
      <NavBar darkMode={darkMode} />
      <Logo darkMode={darkMode} />
      <Main />
    </div>
  );
}

export default App;
