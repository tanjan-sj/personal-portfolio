import React from 'react';
import Typography from '@mui/material/Typography';
import { properties } from '../properties.js';

const Contactme = () => {
  return (
    <div className="App-contact" id="contactBar">
      {' '}
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '80px',
          marginBottom: '20px',
          fontFamily: 'roboto',
        }}
        color="white"
        gutterBottom
      >
        Contact Me at
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 'normal',
          fontSize: '20px',
          marginBottom: '100px',
        }}
        color="snow"
        gutterBottom
      >
        {properties.mailId}
      </Typography>
    </div>
  );
};

export default Contactme;
