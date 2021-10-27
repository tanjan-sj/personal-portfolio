import React from 'react';
import Typography from '@mui/material/Typography';
import sdsl from '../resources/rsz_sdsl.png';
import bkash from '../resources/rsz_bkash.png';
import dsi from '../resources/rsz_dsi.png';
import Stack from '@mui/material/Stack';
import Companyimg from './utils/Companyimg';
import MoreButton from './utils/MoreButton';
import { properties } from '../properties.js';

const Resumebar = () => {
  return (
    <div className="App-resume" id="experienceBar">
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '20px',
          fontFamily: 'roboto',
        }}
        color="#40a829"
        gutterBottom
      >
        Work Experience
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 'normal',
          fontSize: '20px',
          marginBottom: '100px',
        }}
        color="limegreen"
        gutterBottom
      >
        I have had the opportunity to work at these amazing companies so far.
        Download my resume below!
      </Typography>
      <Stack spacing={3} direction="row" padding="20px">
        <Companyimg
          companyPhoto={sdsl}
          companyLink={properties.companyLink1}
          visit={properties.visitMsg1}
        />
        <Companyimg
          companyPhoto={bkash}
          companyLink={properties.companyLink2}
          visit={properties.visitMsg2}
        />
        <Companyimg
          companyPhoto={dsi}
          companyLink={properties.companyLink3}
          visit={properties.visitMsg3}
        />
      </Stack>

      <MoreButton link={properties.resumeLink} title={'Download my resume'} />
    </div>
  );
};

export default Resumebar;
