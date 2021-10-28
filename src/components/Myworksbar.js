import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Projectcard from './utils/Projectcard';
import MoreButton from './utils/MoreButton';
import RoboSUSTdemo from '../resources/RoboSUSTdemo.png';
import androidMalware from '../resources/androidMalware.png';
import newspapers from '../resources/newspapers.jpg';
import mazesolver from '../resources/mazesolver.png';
import sumobot from '../resources/sumobot.png';
import todoList from '../resources/todoList.png';
import { properties } from '../properties.js';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Divider from '@mui/material/Divider';

const Myworksbar = () => {
  return (
    <Box
      className="App-works"
      id="workBar"
      sx={{ backgroundColor: 'primary.main' }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '20px',
          fontFamily: 'roboto',
        }}
        color="secondary"
        gutterBottom
      >
        My Works
      </Typography>

      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 'normal',
          fontSize: '20px',
          marginBottom: '100px',
        }}
        color="secondary"
        gutterBottom
      >
        Showcasing a few of my works!
      </Typography>

      <Box sx={{ width: '70%', flexGrow: 1 }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Projectcard
            img={RoboSUSTdemo}
            title={properties.workTitle1}
            summary={properties.workSummary1}
            repo={properties.workRepo1}
          />
          <Projectcard
            img={androidMalware}
            title={properties.workTitle2}
            summary={properties.workSummary2}
            repo={properties.workRepo2}
            researchGate={properties.researchArray[1].link}
          />
          <Projectcard
            img={newspapers}
            title={properties.workTitle3}
            summary={properties.workSummary3}
            repo={properties.workRepo3}
          />
          <Projectcard
            img={mazesolver}
            title={properties.workTitle4}
            summary={properties.workSummary4}
            repo={properties.workRepo4}
            youtube={properties.mazeYoutube}
          />
          <Projectcard
            img={sumobot}
            title={properties.workTitle5}
            summary={properties.workSummary5}
            repo={properties.workRepo5}
            youtube={properties.sumoYoutube}
          />
          <Projectcard
            img={todoList}
            title={properties.workTitle6}
            summary={properties.workSummary6}
            repo={properties.workRepo6}
          />
        </Grid>
      </Box>

      <MoreButton
        link={properties.gitRepoLink}
        title={'See more on Github!'}
        icon={faGithub}
      />

      <Divider />
    </Box>
  );
};

export default Myworksbar;
