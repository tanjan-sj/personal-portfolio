import React from 'react';
import Skillcolumn from './Skillcolumn';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Divider from '@mui/material/Divider';
import { properties } from '../properties.js';

const Skillbar = () => {
  return (
    <Box
      className="App-skill"
      id="skillBar"
      sx={{ width: '100%', backgroundColor: 'primary.main' }}
    >
      <Box
        sx={{
          width: '60%',
          flexGrow: 1,
          marginBottom: '150px',
          color: 'secondary',
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Skillcolumn
              title={properties.skillTitle1}
              icon={faCode}
              about={properties.skillAbout1}
              seeTheList={properties.skillTitle1}
              items={properties.devArray}
              isResearch={false}
            />
          </Grid>
          <Grid item xs={6}>
            <Skillcolumn
              title={properties.skillTitle1}
              icon={faNetworkWired}
              about={properties.skillAbout2}
              seeTheList={properties.skillTitle2}
              items={properties.researchArray}
              isResearch={true}
            />
          </Grid>
        </Grid>
      </Box>
      <Divider className="divider" />
    </Box>
  );
};

export default Skillbar;
