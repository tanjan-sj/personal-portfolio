import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import List from '@mui/material/List';
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
        border: '0.5px solid lime',
        boxShadow: 5,
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
