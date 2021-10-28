import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const TechItem = ({ techName }) => {
  return (
    <ListItemText
      disableTypography
      primary={
        <Typography
          sx={{
            fontSize: '18px',
            textAlign: 'center',
            color: 'secondary.lighter',
            paddingRight: '20px',
          }}
        >
          {techName}
        </Typography>
      }
    />
  );
};

export default TechItem;
