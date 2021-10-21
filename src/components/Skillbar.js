import React from 'react';
import Skillcolumn from './Skillcolumn';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Skillbar = () => {
  return (
    <div className="App-header">
      <Box sx={{ width: '60%', flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* <Grid item xs={4} style={{ alignItems: 'center', justify: 'center' }}> */}
          <Grid item xs={6}>
            <Skillcolumn
              title={'FullStack Developer'}
              icon={faCode}
              about={`I love designing systems and building stuffs. I find simple code
          beautiful, and design patterns and architecture fascinating.`}
            />
          </Grid>
          <Grid item xs={6}>
            <Skillcolumn />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Skillbar;
