import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faGithub,
  faResearchgate,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Projectcard = ({ img, title, summary, repo, researchGate, youtube }) => {
  return (
    <Grid item xs={4}>
      <Card
        sx={{
          maxWidth: '90%',
          borderRadius: '25px',
          border: '1px solid lime',
          boxShadow: 3,
          height: '400px',
          backgroundColor: 'snow',
        }}
      >
        <CardMedia
          component="img"
          alt=""
          height="200"
          image={img}
          style={{ justifyContent: 'center', display: 'flex' }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="#40a829"
            sx={{ fontWeight: 'normal' }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="#6F6767">
            {summary}
          </Typography>
        </CardContent>
        <CardActions>
          <span style={{ marginLeft: '10px' }}>
            <FontAwesomeIcon
              icon={faGithub}
              size="20px"
              color="#6F6767"
            />
            <Button size="small" onClick={() => window.open(repo)}>
              Github{' '}
            </Button>
          </span>
          {researchGate ? (
            <span style={{ marginLeft: '10px' }}>
              <FontAwesomeIcon
                icon={faResearchgate}
                size="20px"
                color="#6F6767"
              />
              <Button size="small" onClick={() => window.open(researchGate)}>
                ResearchGate{' '}
              </Button>
            </span>
          ) : (
            <></>
          )}

          {youtube ? (
            <span style={{ marginLeft: '10px' }}>
              <FontAwesomeIcon
                icon={faYoutube}
                size="20px"
                color="#6F6767"
              />
              <Button size="small" onClick={() => window.open(youtube)}>
                Youtube{' '}
              </Button>
            </span>
          ) : (
            <></>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Projectcard;
