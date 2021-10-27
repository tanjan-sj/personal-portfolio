import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Listbutton = ({ open, title, handleClick }) => {
  return (
    <ListItemButton onClick={handleClick}>
      <ListItemText
        disableTypography
        primary={
          <Typography
            sx={{
              fontSize: '20px',
              textAlign: 'center',
              color: 'limegreen',
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
        }
      />
      {{ open } ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
  );
};

export default Listbutton;
