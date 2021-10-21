import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faResearchgate,
  faGithub,
  faGitlab,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

//#292C34
export const Topbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background: 'snow',
          height: '100px',
          // border: '3px solid lime',
        }}
      >
        <Stack spacing={3} direction="row" padding="20px">
          <IconButton
            aria-label="Linkedin.com"
            onClick={() =>
              window.open('https://www.linkedin.com/in/umme-sumaya-jannat/')
            }
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="lime" />
          </IconButton>
          <IconButton
            aria-label="Github.com"
            onClick={() => window.open('https://github.com/tanjan-sj')}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" color="lime" />
          </IconButton>
          <IconButton
            aria-label="Gitlab.com"
            onClick={() => window.open('https://gitlab.com/tanjan.sj')}
          >
            <FontAwesomeIcon icon={faGitlab} size="2x" color="lime" />
          </IconButton>
          <IconButton
            aria-label="Researchgate.com"
            onClick={() =>
              window.open('https://www.researchgate.net/profile/Umme-Jannat')
            }
          >
            <FontAwesomeIcon icon={faResearchgate} size="2x" color="lime" />
          </IconButton>
        </Stack>
        {/* <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
        </Toolbar> */}
      </AppBar>
    </Box>
  );
};

export default Topbar;
