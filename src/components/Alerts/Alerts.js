import React from "react";
import Button from "../Button";
import AlertModal from "./AlertModal";
import "./Alerts.css";

function Alerts({ title }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="alerts">
        <h2>
          <strong>{title}</strong>
        </h2>
        <Button variant="contained" color="blue" onClick={handleOpen}>
          Add new Alert
        </Button>
      </div>
      <AlertModal open={open} handleClose={handleClose} />
    </>
  );
}

export default Alerts;
