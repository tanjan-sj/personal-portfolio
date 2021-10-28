import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Icon } from '@mui/material';
import IconButton from '@mui/material/IconButton';

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
              color: 'secondary.lighter',
              fontWeight: 'bold',
            }}
          >
            {title}
          </Typography>
        }
      />
      {{ open } ? (
        <ExpandLess fontSize="large" sx={{ color: 'secondary.lighter' }} />
      ) : (
        <ExpandMore fontSize="large" sx={{ color: 'secondary.lighter' }} />
      )}
      {/* {{ open }
        ? console.log('open true: ', open)
        : console.log('open false: ', open)} */}
    </ListItemButton>
  );
};

export default Listbutton;
