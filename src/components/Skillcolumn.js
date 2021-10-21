import React from 'react';
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

import PrimaryTitle from '../utils/PrimaryTitle';
import About from '../utils/About';
import Listbutton from '../utils/Listbutton';
import TechItem from '../utils/TechItem';
import ResearchItem from '../utils/ResearchItem';

const Skillcolumn = ({ title, about, icon, seeTheList, items, isResearch }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  var rows = [];
  for (var i = 0; i < items.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    console.log('item: ', items[i]);
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
  // console.log('rows: ', rows);
  return (
    <Card
      sx={{
        minWidth: '50%',
        minHeight: '100%',
        // border: '2px solid limegreen',
        borderRadius: '25px',
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
            <List component="div" disablePadding>
              {rows}
            </List>
          </Collapse>
        </List>
      </CardContent>
    </Card>
  );
};

export default Skillcolumn;
