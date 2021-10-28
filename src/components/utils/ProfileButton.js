import React from 'react';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfileButton = ({ label, link, icon }) => {
  return (
    <IconButton
      aria-label={label}
      onClick={() => window.open(link)}
      color="secondary"
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </IconButton>
  );
};

export default ProfileButton;
