import React from 'react';

import { AppBar, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';
import logo from "../../../assets/img/Logo.png"
import { Redirect } from 'react-router-dom';
import { store, history } from '../../../store';

export default function MobileHeader(props){

  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch(newValue) {
        case "home":
        return history.push('/')
        case "search":
        return history.push('/search')
        case "profile":
        return history.push('/chooseLoginRegister')
        case "info":
            return history.push('/')
        default:
        return history.push('/')
    }
   
    
  };

    
    return(
        <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}}>
            <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction value="home" icon={<img src={logo} style={{height:"20px;"}} />} />
            <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />}   />
            <BottomNavigationAction label="Profile" value="profile" icon={<AccountCircleIcon />} />
            <BottomNavigationAction label="Info" value="info" icon={<InfoIcon />} />
          </BottomNavigation>
        </AppBar>
    );
}