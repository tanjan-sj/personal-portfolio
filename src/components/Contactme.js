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
      sx={{ backgroundColor: 'primary.main', display: 'flex' }}
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
      <IconButton
        variant="outlined"
        onClick={() => {
          const element = document.getElementById('topBar');
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
        size="large"
        sx={{
          color: 'secondary.lighter',
          backgroundColor: 'secondary.main',
          justifyContent: 'flex-end',
          textAlign: 'right',
          float: 'right',
          marginLeft: '1600px',
          fontSize: '50px',
          marginBottom: '20px',
          // borderRadius: '28px',
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default Contactme;
