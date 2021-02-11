import React from 'react';
import { Div, Img } from './styles';

const Logo = ({ darkMode }) => {
  return (
    <Div>
      <Img
        src={darkMode.value ? 'logo-dark.png' : 'logo-light.png'}
        alt="WhereToWatch"
      />
    </Div>
  );
};

export default Logo;
