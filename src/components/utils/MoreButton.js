import React from 'react';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//color: '#40a829',
const MoreButton = ({ link, title, icon }) => {
  return (
    <span style={{ marginLeft: '10px' }}>
      <Button
        variant="outlined"
        sx={{
          margin: '80px',
          marginBottom: '150px',
          fontSize: '17px',
          borderRadius: '10px',
          color: 'secondary.lighter',
          border: '1px solid secondary',
          backgroundColor: 'primary.main',
          boxShadow: 3,
        }}
        onClick={() => window.open(link)}
      >
        {icon ? (
          <FontAwesomeIcon
            icon={icon}
            size="20px"
            color="secondary"
            style={{
              marginRight: '10px',
            }}
          />
        ) : (
          <></>
        )}
        {title}
      </Button>
    </span>
  );
};

export default MoreButton;
