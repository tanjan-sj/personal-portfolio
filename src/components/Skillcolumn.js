import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import PrimaryTitle from './utils/PrimaryTitle';
import About from './utils/About';
import Listbutton from './utils/Listbutton';
import TechItem from './utils/TechItem';
import ResearchItem from './utils/ResearchItem';
import IconButton from '@mui/material/IconButton';

const Skillcolumn = ({ title, about, icon, seeTheList, items, isResearch }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
    console.log('open: ', open);
  };

  var rows = [];
  for (var i = 0; i < items.length; i++) {
    if (isResearch) {
      rows.push(
        <ResearchItem
          key={i}
          researchName={items[i].research}
          researchLink={items[i].link}
        />
      );
    } else {
      rows.push(<TechItem key={i} techName={items[i]} />);
    }
  }
  return (
    <Card
      sx={{
        minWidth: '50%',
        borderRadius: '5px',
        border: '0.5px solid secondary.lighter',
        boxShadow: 5,
        textAlign: 'center',
        marginTop: '100px',
      }}
    >
      <CardContent>
        <span className="icon-style">
          <IconButton sx={{ color: 'secondary.lighter' }}>
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              pull="right"
              textAlign="center"
            />
          </IconButton>
        </span>
        {/* <span className="icon-style">
          <IconButton color="secondary">
            <FontAwesomeIcon icon={icon} size="2x" color="primary" />
          </IconButton>
        </span> */}

        <PrimaryTitle title={title} />
        <About about={about} />

        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            textAlign: 'center',
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Listbutton
            open={open}
            title={seeTheList}
            handleClick={handleClick}
          />
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{ color: 'secondary.lighter' }}
            >
              {rows}
            </List>
          </Collapse>
        </List>
      </CardContent>
    </Card>
  );
};

export default Skillcolumn;
