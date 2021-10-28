import React from 'react';
import Typography from '@mui/material/Typography';
import { properties } from '../properties.js';
import Box from '@mui/material/Box';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Contactme = () => {
  return (
    <Box
      className="App-contact"
      id="contactBar"
      sx={{ backgroundColor: 'primary.main' }}
    >
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
        color="secondary.lighter"
        gutterBottom
      >
        Contact Me at
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 'normal',
          fontSize: '20px',
          marginBottom: '70px',
        }}
        color="secondary.lighter"
        gutterBottom
      >
        {properties.mailId}
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 'normal',
          fontSize: '15px',
          marginBottom: '100px',
        }}
        color="secondary.lighter"
        gutterBottom
      >
        Third party logos are registered trademark of the respective companies.
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          const element = document.getElementById('topBar');
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
        sx={{
          color: 'secondary.lighter',
        }}
      >
        <KeyboardArrowUpIcon />
      </Button>
    </Box>
  );
};

export default Contactme;
