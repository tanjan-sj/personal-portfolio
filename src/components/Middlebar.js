import React from 'react';
import hero from '../resources/hero.svg';
import Box from '@mui/material/Box';


const Middlebar = () => {
  return (
    <Box className="App-middle" sx={{ backgroundColor: 'primary.main' }}>
      <img src={hero} alt="mid photo" />
    </Box>
  );
};

export default Middlebar;
