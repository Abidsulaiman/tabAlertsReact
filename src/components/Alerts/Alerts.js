import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import AlertModal from "./AlertModal";
import AlertItem from "./AlertItem";

const AlertsHead = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

const ListAlert = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

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
      <AlertsHead>
        <h2>
          <strong>{title}</strong>
        </h2>
        <Button onClick={handleOpen} variant="contained" color="secondary">
          Add new Alert
        </Button>
      </AlertsHead>
      <ListAlert>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <AlertItem name="Alert 1" />
          </Grid>
        </Grid>
      </ListAlert>
      <AlertModal open={open} handleClose={handleClose} />
    </>
  );
}

export default Alerts;
