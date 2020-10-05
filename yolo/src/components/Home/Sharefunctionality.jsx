import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import SystemUpdateAltRoundedIcon from '@material-ui/icons/SystemUpdateAltRounded';
import {Link} from 'react-router-dom';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(1),
  },


}));



export default function SimplePopover(props) { 

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <SystemUpdateAltRoundedIcon aria-describedby={id}  onClick={handleClick} style={{fontSize: '12px', transform: 'rotateX(180deg)'}}/>
 
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >

        <Typography className={classes.typography}>

            <Link style={{fontSize: '12px', color: '#4d4d4d', textDecoration: 'none'}} to={props.b1}>
                <AlternateEmailRoundedIcon style={{fontSize: '13px'}}/> &nbsp;Mail
            </Link> 
            <br/>
            <Link style={{fontSize: '12px', color: '#4d4d4d', textDecoration: 'none'}} to={props.brand}>
                <FileCopyOutlinedIcon style={{fontSize: '13px'}}/> &nbsp;Copy Link
            </Link>

        </Typography>       


      </Popover>
    </div>
  );
}
