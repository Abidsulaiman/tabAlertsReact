import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import useForm from './hooks/useForm'

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: '20px',
    width: '100%'
  }
}));

function AddNewForm() {
  const classes = useStyles()
  const { value:alertName, bind:bindAlertName, reset:resetAlertName } = useForm('');
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${alertName}`);
    resetAlertName();
}

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField required className={classes.input} {...bindAlertName} label="Alert name" variant="outlined" />
      <TextField required className={classes.input} id="firstTitle" label="First Title" variant="outlined" />
      <TextField required className={classes.input} id="secondTitle" label="Second Title" variant="outlined" />
      <TextField required className={classes.input} id="timeInterval" label="Time Interval" variant="outlined" />
      <TextField required className={classes.input} id="timeInterval" label="Time Delay" variant="outlined" />

      <input type="submit" value="save"/>
    </form>
  )
}

export default AddNewForm
