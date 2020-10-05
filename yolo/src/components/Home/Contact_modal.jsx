import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import {Link} from 'react-router-dom';
import PermPhoneMsgRoundedIcon from '@material-ui/icons/PermPhoneMsgRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import './Home.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <span>
      <Link style={{color: '#4d4d4d'}} onClick={handleOpen}>
        Contact Me
      </Link>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>

            <div class="modal_row">

                <div class="modal_column">
                    <EmailRoundedIcon style={{fontSize: '25px'}}/><br/><br/>
                    {props.m1}
                </div>

                <div class="modal_column">
                    <PermPhoneMsgRoundedIcon style={{fontSize: '25px'}}/><br/><br/>
                    {props.m2}
                </div>

                <div class="modal_column">
                    <LocationOnRoundedIcon style={{fontSize: '25px'}}/><br/><br/>
                    {props.m3}
                </div>

            </div>

          </div>
        </Fade>
      </Modal>
    </span>
  );
}
