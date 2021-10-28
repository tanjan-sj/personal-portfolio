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
          border: '1px solid secondary',
          boxShadow: 3,
          height: '400px',
          backgroundColor: 'secondary.lighter',
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
            color="primary.lighter"
            sx={{ fontWeight: 'normal' }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="primary.lighter">
            {summary}
          </Typography>
        </CardContent>
        <CardActions>
          <span style={{ marginLeft: '10px' }}>
            <IconButton sx={{ color: 'primary.lighter', fontSize: '35px' }}>
              <FontAwesomeIcon icon={faGithub} color="primary.lighter" />
            </IconButton>
            <Button size="small" onClick={() => window.open(repo)}>
              Github{' '}
            </Button>
          </span>
          {researchGate ? (
            <span style={{ marginLeft: '10px' }}>
              <IconButton sx={{ color: 'primary.lighter', fontSize: '35px' }}>
                <FontAwesomeIcon
                  icon={faResearchgate}
                  color="primary.lighter"
                />
              </IconButton>
              <Button size="small" onClick={() => window.open(researchGate)}>
                ResearchGate{' '}
              </Button>
            </span>
          ) : (
            <></>
          )}

          {youtube ? (
            <span style={{ marginLeft: '10px' }}>
              <IconButton sx={{ color: 'primary.lighter', fontSize: '35px' }}>
                <FontAwesomeIcon icon={faYoutube} color="primary.lighter" />
              </IconButton>
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
