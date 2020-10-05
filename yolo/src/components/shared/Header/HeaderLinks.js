/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../../CustomDropdown/CustomDropdown.js";
import Button from "../../CustomButtons/Button";

import styles from "../../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
import { store, history } from '../../../store';

export default function HeaderLinks(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openDialog, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [anchorE, setAnchorE] = React.useState(null);
  const [placement, setPlacement] = React.useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [openPopper, setOpenPopper] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedSearchItem, setselectedSearchItem] = useState("All");
  const [businessTypes, setBusinessTypes] = useState([]);
  const [financialTypes, setFinancialTypes] = useState([]);
  const [selectedBusinessType, setSelectedBusinessType] = useState(["Company Secretary"]);
  const [selectedFinancialType, setselectedFinancialType] = useState(["Banking"]);
  const [openProfile, setopenProfile] = useState(false);
  const [anchorMenuEl, setAnchorMenuEl] = React.useState(null);
  const [userName, setuserDetails] = useState([]);

//location
  const [lopen,setLopen] = useState(false);
  const [scroll,setScroll]=useState("paper");
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry1, setSelectedCountry1] = useState({
      "name": "India",
      "dial_code": "+91",
      "code": "IN",
      "popular_cities":[1,2,3,4,5,6,7,8,9],
      "other_cities":[10,11,12,13,14,15,16,17,18,19,20]
      });

      const Locationstyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
    const classLocation = Locationstyles();
    const handleClickLopen = () =>  {
         setLopen(true);
        setScroll("paper")
      };
    
    const handleLclose = () => {
        console.log("LOPEN-->",lopen);
        setLopen(false);
        console.log("LOPEN-->",lopen,value);
      };

    const [value, setValue] = React.useState({
        "name": "India",
        "dial_code": "+91",
        "code": "IN",
        "popular_cities":[1,2,3,4,5,6,7,8,9],
        "other_cities":[10,11,12,13,14,15,16,17,18,19,20]
        });
        
    const  getCity=(update)=>{
        console.log("value---> ",update);
        setValue(update)
        let x;
        for (x of countriesList){
            if(x == update){
                console.log("Foundd",x)
               setSelectedCountry1(x)
            }
        }
    }

    const styles = (theme) => ({
      root: {
          margin: 0,
          padding: theme.spacing(2),
      },
      closeButton: {
          position: 'absolute',
          right: theme.spacing(1),
          top: theme.spacing(1),
          color: theme.palette.grey[500],
      },
  });

  const menuClasses = makeStyles((theme) => ({
      root: {
          display: 'flex',
      },
      paper: {
          marginRight: theme.spacing(2),
      },
  }));

  const [openProfilemenu, setopenProfilemenu] = React.useState(false);
  const anchorMenuRef = React.useRef(null);

  const handleMenuToggle = () => {
      setopenProfilemenu((prevOpen) => !prevOpen);
  };

  const handleMenuClose = (event) => {
      if (anchorMenuRef.current && anchorMenuRef.current.contains(event.target)) {
          return;
      }
      setopenProfilemenu(false);
  };

  const handleListKeyDown = (event) => {
      if (event.key === 'Tab') {
          event.preventDefault();
          setopenProfilemenu(false);
      }
  }

  const useMultiStyles = makeStyles((theme) => ({
      formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
          maxWidth: 300,
      },
      chips: {
          display: 'flex',
          flexWrap: 'wrap',
      },
      chip: {
          margin: 2,
      },
      noLabel: {
          marginTop: theme.spacing(3),
      },
  }));

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
      PaperProps: {
          style: {
              maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
              width: 250,
          },
      },
  };

  const handlemenuClick = (event) => {
      setAnchorMenuEl(event.currentTarget);
  };

  const handlemenuClose = () => {
      setAnchorMenuEl(null);
  };

  const handleBussinessChange = (event) => {
      setSelectedBusinessType(event.target.value);

      store.dispatch({
          type: FILTER_BY_BUSINESS_SERVICES,
          payload: event.target.value
      })
  };

  const logout = () => {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userProfile');
      window.localStorage.removeItem('providerProfile');
      window.location.reload(false);
  }

 
  const handleFinanceChange = (event) => {
      setselectedFinancialType(event.target.value);
      store.dispatch({
          type: FILTER_BY_BUSINESS_SERVICES,
          payload: event.target.value
      })
  };

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const [openFilter, setopenFilter] = React.useState(false);

const handleClickOpen = () => {
    setopenFilter(true);
};
const handleFilterClose = () => {
    setopenFilter(false);
};



useEffect(() => {
    if (history.location.pathname !== '/login' || '/register') {
        setIsLoggedIn(true);
    }
    if (localStorage.getItem("userProfile")==='true') {
        setIsLoggedIn(true);
    }
    if (localStorage.getItem("providerProfile")==='true') {
        setopenProfile(true);
    }
    setIsLoggedIn(false);
    console.log(props);
    store.subscribe(() => {
        setCountriesList(store.getState().getCountries.countries);
        setBusinessTypes(store.getState().getBusinessTypes.success);
        setFinancialTypes(store.getState().getFinancialService.success);
        
    });
    if (localStorage.getItem('userProfile') === 'true') {
        if(store.getState().getUserDetails.success.length>0){
            setName(store.getState().getUserDetails.success[0].name);
        }else{
            localStorage.setItem('userProfile', true);
            
        }
    }


}, []);


const classes = useStyles();

const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        if (localStorage.getItem('userProfile')) {
            localStorage.setItem('userProfile', false);
            history.push('/dashboard');
        }
        if (localStorage.getItem('providerProfile')) {
            localStorage.setItem('providerProfile', false);
            history.push('/provider/dashboard');
        }

    }

  const navigateToRegister = () => {
    history.push('/register');
}

const navigatetoLogin = () => {
  history.push('/login')
}


  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      {
        localStorage.getItem('userProfile') ? null:
        <CustomDropdown
          noLiPadding
          buttonText="Provider"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/provider/register" className={classes.dropdownLink}>
              Provider Register
            </Link>,
            <Link to="/provider/login" className={classes.dropdownLink}>
            Provider Login
          </Link>,
          ]}
        />
        }
      </ListItem>
      <ListItem className={classes.listItem}>

      {
        localStorage.getItem('userProfile') ? <Button
        color="transparent"
        target="_blank"
        className={classes.navLink}
        onClick={handleProfile}
      >
       <b>Welcome {name}</b>
      </Button> :
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={navigatetoLogin}
        >
         <b>Login</b>
        </Button>
        }
        
      </ListItem>

      <ListItem className={classes.listItem}>
        
      {
        localStorage.getItem('userProfile') ? <Button
        color="info"
        target="_blank"
        className={classes.navLink}
        onClick={logout}
      >
        Logout
      </Button> :
        <Button
            color="info"
            target="_blank"
            className={classes.navLink}
            onClick={navigateToRegister}
          >
            Register
          </Button>
      }
        
        
      </ListItem>
  
    </List>
  );
}
