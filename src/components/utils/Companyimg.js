import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const Companyimg = ({ companyPhoto, companyLink, visit }) => {
  return (
    <Tooltip title={visit}>
      <img
        src={companyPhoto}
        alt="mid photo"
        style={{
          textAlign: 'center',
        }}
        onClick={() => window.open(companyLink)}
      />
    </Tooltip>
  );
};

export default Companyimg;
