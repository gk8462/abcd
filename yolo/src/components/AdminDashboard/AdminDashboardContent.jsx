import React from 'react';
import PropTypes from 'prop-types';
//import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import SearchIcon from '@material-ui/icons/Search';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';


import AdminApprovalContainer from '../../containers/adminApprovalContainer';
import AllProfilesContainer from '../../containers/allprofilescontainer';


import { connect } from 'react-redux';

import './AdminDashboard.css';




var app_style={
    backgroundColor: '#fff', color: '#4d4d4d', boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)',
    padding: '10px 0px 0px 0px'
}



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '96%', marginLeft: '2%', boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
  }));
  
  export default function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>

        <AppBar position="static" style={app_style}>

          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label={<NotificationsActiveOutlinedIcon/>} {...a11yProps(0)} />
            <Tab label={<SearchIcon/>} {...a11yProps(1)} />
            <Tab label={<BarChartOutlinedIcon/>} {...a11yProps(2)} />
          </Tabs>

        </AppBar>




        <TabPanel value={value} index={0} class="tab_panel">
            <div class="lower_div_element">
                <AdminApprovalContainer unapprovedList={props.unapprovedList}/>
            </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
            <div class="lower_div_element">
                <AllProfilesContainer/>
            </div>
        </TabPanel>

        <TabPanel value={value} index={2}>
            <AdminApprovalContainer unapprovedList={props.unapprovedList}/>
        </TabPanel>

      </div>
    );
  }
  

