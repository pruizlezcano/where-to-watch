import React from 'react';
import useDarkMode from 'use-dark-mode';
import Switch from 'rc-switch';
import { Div } from './styles';

const NavBar = () => {
  const darkMode = useDarkMode(false);

  return (
    <Div>
      <Switch onChange={darkMode.toggle} />
      <p>{darkMode.value ? 'Light Mode' : 'Dark Mode'}</p>
    </Div>
  );
};

export default NavBar;
