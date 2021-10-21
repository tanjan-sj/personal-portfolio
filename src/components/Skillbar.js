import React from 'react';
import Skillcolumn from './Skillcolumn';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlasses } from '@fortawesome/free-solid-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Skillbar = () => {
  var devArray = [
    'Java, Spring Boot',
    'Node.js, Express.js',
    'Javascript ES6, HTML5/CSS',
    'React.js',
    'Apache Kafka Streams',
    'Python',
    'C/C++',
  ];
  var researchArray = [
    {
      research:
        'Analysis and Detection of Malware in Android Applications Using Machine Learning',
      link: 'https://www.researchgate.net/publication/330738809_Analysis_and_Detection_of_Malware_in_Android_Applications_Using_Machine_Learning',
    },
    {
      research:
        'A Cross-Layer Trust-based Consensus Protocol for Peer-to-Peer Energy Trading Using Fuzzy Logic',
      link: 'https://www.researchgate.net/publication/349901541_A_Cross-Layer_Trust-based_Consensus_Protocol_for_Peer-to-Peer_Energy_Trading_Using_Fuzzy_Logic',
    },
  ];
  return (
    <div className="App-skill">
      <Box sx={{ width: '60%', flexGrow: 1 }}>
        <Grid container spacing={1}>
          {/* <Grid item xs={4} style={{ alignItems: 'center', justify: 'center' }}> */}
          <Grid item xs={6}>
            <Skillcolumn
              title={'FullStack Developer'}
              icon={faCode}
              about={`I love designing systems and building stuffs. I find simple code
          beautiful, and design patterns and architecture fascinating.`}
              seeTheList={'Technologies'}
              items={devArray}
              isResearch={false}
            />
          </Grid>
          <Grid item xs={6}>
            <Skillcolumn
              title={'Researcher'}
              icon={faNetworkWired}
              about={`Interested in security, blockchain technology, effective software development and all new tech!`}
              seeTheList={'Research Works'}
              items={researchArray}
              isResearch={true}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Skillbar;
