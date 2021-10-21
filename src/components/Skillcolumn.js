import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const Skillcolumn = ({ title, about, icon }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Card
      sx={{
        minWidth: '50%',
        minHeight: '100%',
      }}
    >
      <CardContent>
        <span className="icon-style">
          <FontAwesomeIcon
            icon={icon}
            size="lg"
            color="lime"
            pull="right"
            textAlign="center"
            style={{
              marginLeft: '215px',
            }}
          />
        </span>
        <Typography
          sx={{
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
          color="DarkSlateGrey"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          sx={{ textAlign: 'center', marginBottom: '40px' }}
          color="text.secondary"
        >
          {about}
        </Typography>

        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            textAlign: 'center',
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{
                    fontSize: '20px',
                    textAlign: 'center',
                    color: 'limegreen',
                  }}
                >
                  {'Technologies:'}
                </Typography>
              }
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    sx={{
                      fontSize: '18px',
                      textAlign: 'center',
                      color: 'DarkSlateGrey',
                    }}
                  >
                    {'Spring Boot'}
                  </Typography>
                }
              />
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    sx={{
                      fontSize: '18px',
                      textAlign: 'center',
                      color: 'DarkSlateGrey',
                    }}
                  >
                    {'Node.Js'}
                  </Typography>
                }
              />
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    sx={{
                      fontSize: '18px',
                      textAlign: 'center',
                      color: 'DarkSlateGrey',
                    }}
                  >
                    {'Java'}
                  </Typography>
                }
              />
            </List>
          </Collapse>
        </List>
      </CardContent>
    </Card>
  );
};

export default Skillcolumn;
