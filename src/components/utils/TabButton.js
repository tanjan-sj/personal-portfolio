import React from 'react';
import Button from '@mui/material/Button';

const TabButton = ({ id, tag }) => {
  return (
    <Button
      style={{ paddingLeft: '8px', fontWeight: 'bold' }}
      color="secondary"
      onClick={() => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
    >
      {tag}
    </Button>
  );
};

export default TabButton;
