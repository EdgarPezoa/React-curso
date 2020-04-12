import React from 'react';
import { Parrafo } from '../components/titles/Parrafo';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BusinessIcon from '@material-ui/icons/Business';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    'margin-top':theme.spacing(2),
    'margin-bottom':theme.spacing(2),
    border:'1px solid lightgrey'
  },
}));

export function TabsCustom() {
  const dataTabs = [
    {
      titulo:'Tab1',
      icono: <BusinessIcon />,
      contenido:'Contenido tab 1',
    },
    {
      titulo:'Tab2',
      icono: <FavoriteIcon />,
      contenido:'Contenido tab 2'
    },
    {
      titulo:'Tab3',
      icono: <EventAvailableIcon />,
      contenido:'Contenido tab 3'
    },
  ];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDataTabs1 = () => {
    return(
      Object.keys(dataTabs).map((dataTab)=>{
        return(
          <Tab key={ dataTab } label={dataTabs[dataTab].titulo} icon={ dataTabs[dataTab].icono } {...a11yProps(dataTab)} />
        )
      })
    )
  }
  
  const handleDataTabs2 = () => {
    return(
      Object.keys(dataTabs).map((dataTab)=>{
        return(
          <TabPanel key={ dataTab }  value={value} index={ JSON.parse(dataTab) }>
            <Parrafo>{ dataTabs[dataTab].contenido }</Parrafo>
          </TabPanel>
        )
      })
    )
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          centered
        >
          { handleDataTabs1() }
        </Tabs>
      </AppBar>
      { handleDataTabs2() }

    </div>
  );
}