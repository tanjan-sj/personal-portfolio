import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faResearchgate,
  faGithub,
  faGitlab,
  faLinkedin,
  faGoodreads,
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
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="limegreen" />
          </IconButton>
          <IconButton
            aria-label="Github.com"
            onClick={() => window.open('https://github.com/tanjan-sj')}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" color="limegreen" />
          </IconButton>
          <IconButton
            aria-label="Gitlab.com"
            onClick={() => window.open('https://gitlab.com/tanjan.sj')}
          >
            <FontAwesomeIcon icon={faGitlab} size="2x" color="limegreen" />
          </IconButton>
          <IconButton
            aria-label="Researchgate.com"
            onClick={() =>
              window.open('https://www.researchgate.net/profile/Umme-Jannat')
            }
          >
            <FontAwesomeIcon
              icon={faResearchgate}
              size="2x"
              color="limegreen"
            />
          </IconButton>
          <IconButton
            aria-label="Goodreads.com"
            onClick={() =>
              window.open(
                'https://www.goodreads.com/user/show/40008219-umme-sumaya-jannat'
              )
            }
          >
            <FontAwesomeIcon icon={faGoodreads} size="2x" color="limegreen" />
          </IconButton>
        </Stack>
      </AppBar>
    </Box>
  );
};

export default Topbar;
