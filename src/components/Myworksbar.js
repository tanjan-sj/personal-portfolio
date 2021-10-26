import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Projectcard from '../utils/Projectcard';
import RoboSUSTdemo from '../resources/RoboSUSTdemo.png';
import androidMalware from '../resources/androidMalware.png';
import newspapers from '../resources/newspapers.jpg';
import mazesolver from '../resources/mazesolver.png';
import sumobot from '../resources/sumobot.png';
import todoList from '../resources/todoList.png';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Myworksbar = () => {
  return (
    <div className="App-works">
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '20px',
          fontFamily: 'roboto',
        }}
        color="DarkSlateGrey"
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
        color="DimGray"
        gutterBottom
      >
        Showcasing a few of my works
      </Typography>

      <Box sx={{ width: '70%', flexGrow: 1 }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Projectcard
            img={RoboSUSTdemo}
            title={'RoboSUST demo'}
            summary={
              'A demo website for a research-based robotics organization, RoboSUST.'
            }
            repo={'https://github.com/tanjan-sj/RoboSUST-demo'}
          />
          <Projectcard
            img={androidMalware}
            title={'Android Malware Analysis'}
            summary={
              'This is a part of the study for an arificial intelligent project - Analysis and Detection of Malware in Android Applications Using Machine Learning.'
            }
            repo={'https://github.com/tanjan-sj/Android-Malware-Analysis'}
            researchGate={
              'https://www.researchgate.net/publication/330738809_Analysis_and_Detection_of_Malware_in_Android_Applications_Using_Machine_Learning'
            }
          />
          <Projectcard
            img={newspapers}
            title={'Bengali News Paper Article Crawler'}
            summary={
              'A small scale crawler for scraping Bengali news article from a few select website.'
            }
            repo={'https://github.com/tanjan-sj/bengali-news-article-crawler'}
          />
          <Projectcard
            img={mazesolver}
            title={'Maze Solver Robot'}
            summary={
              'Built this robot for International Autonomous Robotics Contest (Bangladesh Round). My team was the national 1st Runners Up.'
            }
            repo={'https://github.com/tanjan-sj/maze-solver-robot'}
            youtube={'https://www.youtube.com/watch?v=uKpRkR70YtQ'}
          />
          <Projectcard
            img={sumobot}
            title={'Sumo Robot'}
            summary={
              'Built this robot for the first ever Sumo Robot competition in Bangladesh. My team was the national champion.'
            }
            repo={'https://github.com/tanjan-sj/sumo-bot'}
            youtube={'https://www.youtube.com/watch?v=chLhbB3obhc'}
          />
          <Projectcard
            img={todoList}
            title={'A simple Todo list project'}
            summary={`It's a simplisting to-do list project made with React.js and a backend json server.`}
            repo={'https://github.com/tanjan-sj/todo-list'}
          />
        </Grid>
      </Box>

      <span style={{ marginLeft: '10px' }}>
        <Button
          variant="outlined"
          sx={{
            margin: '80px',
            fontSize: '17px',
            borderRadius: '10px',
            color: 'lime',
            border: '1px solid lime',
            boxShadow: 3,
          }}
          onClick={() =>
            window.open('https://github.com/tanjan-sj?tab=repositories')
          }
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="20px"
            color="limegreen"
            style={{
              marginRight: '10px',
            }}
          />
          See more on Github!
        </Button>
      </span>
    </div>
  );
};

export default Myworksbar;
