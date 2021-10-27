import React from 'react';
import Typography from '@mui/material/Typography';

const About = ({ about }) => {
  return (
    <Typography
      sx={{ textAlign: 'center', marginBottom: '40px' }}
      color="text.secondary"
    >
      {about}
    </Typography>
  );
};

export default About;
