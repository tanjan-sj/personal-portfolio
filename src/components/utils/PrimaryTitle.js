import React from 'react';
import Typography from '@mui/material/Typography';

const PrimaryTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}
      color="#40a829"
      gutterBottom
    >
      {title}
    </Typography>
  );
};

export default PrimaryTitle;
