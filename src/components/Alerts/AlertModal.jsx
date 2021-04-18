import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AddNewForm from "../AddNewForm";
import './AlertModal.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    borderRadius: "6px",
    width: '600px'
  },
}));

function AlertModal({ open, handleClose }) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="addnewModal-title"
        aria-describedby="addnewModal-desc"
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
            <h2 id="addnewModal-title">Add new alert</h2>
            <AddNewForm />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AlertModal;
