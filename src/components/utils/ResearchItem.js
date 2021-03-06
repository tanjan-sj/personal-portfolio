import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { ListItemButton } from '@mui/material';

const ResearchItem = ({ researchName, researchLink }) => {
  console.log('researchLink: ', researchLink);
  return (
    <ListItemButton
      style={{ padding: '24px' }}
      onClick={() => window.open(researchLink)}
    >
      <ListItemText
        disableTypography
        primary={
          <Typography
            sx={{
              fontSize: '18px',
              textAlign: 'center',
              // color: 'DarkSlateGrey',
              paddingRight: '20px',
              color: 'secondary.linkColor',
            }}
          >
            {researchName}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

export default ResearchItem;
