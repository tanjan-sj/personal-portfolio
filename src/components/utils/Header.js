import React from 'react';
import logo from '../../resources/logo.png';
import { properties } from '../../properties.js';

const Header = () => {
  return (
    <header className="App-header" style={{ fontWeight: 'bold' }}>
      {/* Developer | Reader | Researcher{' '} */}
      {properties.title1} {' | '} {properties.title2} {' | '}{' '}
      {properties.title3}
      <p style={{ fontSize: '20px', fontWeight: 'normal' }}>
        {' '}
        {properties.subheader}{' '}
      </p>{' '}
      <img
        src={logo}
        alt="Avatar"
        style={{ borderRadius: '50%', width: '200px' }}
      ></img>
    </header>
  );
};

export default Header;
