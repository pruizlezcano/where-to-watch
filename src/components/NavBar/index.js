import React from 'react';
import Switch from 'rc-switch';
import { Div } from './styles';

const NavBar = ({ darkMode }) => {
  return (
    <Div>
      <Switch onChange={darkMode.toggle} />
      <p>{darkMode.value ? 'Light Mode' : 'Dark Mode'}</p>
    </Div>
  );
};

export default NavBar;
