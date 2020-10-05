import React from 'react';
import {
    AppBar, Toolbar, Typography,
    CssBaseline, List, Divider, 
    IconButton, Drawer, ListItem, ListItemIcon, makeStyles,
    useTheme, ListItemText, Icon
} from '@material-ui/core';
import clsx from 'clsx';
import { history } from '../../../store';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


export default function AdminHeader () {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [clickaw, clickawChange] = React.useState(false);
    const [name, setName] = React.useState('Dashboard');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function sayHello(name) {
        setName(name);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
      window.localStorage.removeItem('token');
      history.push('/');
    }

    const opened = Boolean(anchorEl);
    const id = opened ? 'simple-popover' : undefined;

    return(
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Icon className="fa fa-bars" />
            </IconButton>
            <Typography variant="h6" noWrap>
              {name}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <Icon className="fa fa-exchange" /> : <Icon className="fa fa-exchange" />}
            </IconButton>
          </div>
          <Divider />
          <List>
              <ListItem button>
                <ListItemIcon onClick={() => setName('All History')}> <Icon className="fa fa-history" /></ListItemIcon>
                <ListItemText primary={'All History'} />
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button>
                <ListItemIcon onClick={() => setName('Profile')}><Icon className="fa fa-id-badge" /></ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItem>
              <ListItem button onClick={logout}>
                <ListItemIcon onClick={() => setName('SignOut')}><Icon className="fa fa-sign-out" /></ListItemIcon>
                <ListItemText primary={"Sign Out"} />
              </ListItem>
          </List>
        </Drawer>
      </div>
    );
}