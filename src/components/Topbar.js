import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import {
  faResearchgate,
  faGithub,
  faGitlab,
  faLinkedin,
  faGoodreads,
} from '@fortawesome/free-brands-svg-icons';

import ProfileButton from './utils/ProfileButton';
import TabButton from './utils/TabButton';
import { properties } from '../properties.js';

export const Topbar = () => {
  return (
    <Box color="primary" sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background: 'snow',
          height: '100px',
        }}
      >
        <Toolbar>
          <Stack
            spacing={3}
            direction="row"
            padding="20px"
            justify="space-between"
          >
            <ProfileButton
              label={'Linkedin.com'}
              link={properties.linkedinLink}
              icon={faLinkedin}
            />
            <ProfileButton
              label={'Github.com'}
              link={properties.githubLink}
              icon={faGithub}
            />
            <ProfileButton
              label={'Gitlab.com'}
              link={properties.gitlabLink}
              icon={faGitlab}
            />
            <ProfileButton
              label={'Researchgate.com'}
              link={properties.researchgateLink}
              icon={faResearchgate}
            />
            <ProfileButton
              label={'Goodreads.com'}
              link={properties.goodreadsLink}
              icon={faGoodreads}
            />
          </Stack>

          <Divider className="divider-top" />

          <TabButton id={'introBar'} tag={'About Me'} />
          <TabButton id={'skillBar'} tag={'Skill'} />
          <TabButton id={'workBar'} tag={'Works'} />
          <TabButton id={'experienceBar'} tag={'Experience'} />
          <TabButton id={'contactBar'} tag={'Contact me'} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Topbar;
