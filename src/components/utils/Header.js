import React from 'react';
import logo from '../../resources/logo.png';
import network from '../../resources/network.png';

import { properties } from '../../properties.js';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Box
      className="App-header"
      sx={{
        fontWeight: 'bold',
        backgroundColor: 'primary.main',
        color: 'secondary.main',
      }}
    >
      {properties.title1} {' | '} {properties.title2} {' | '}{' '}
      {properties.title3}
      <p style={{ fontSize: '20px', fontWeight: 'normal' }}>
        {' '}
        {properties.subheader}{' '}
      </p>{' '}
      <img
        src={network}
        alt="Avatar"
        style={{ borderRadius: '50%', width: '250px' }}
      ></img>
    </Box>
  );
};

export default Header;
