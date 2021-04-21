import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputAdornment from '@material-ui/core/InputAdornment';
import EmojiEmotions from '@material-ui/icons/EmojiEmotionsOutlined';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%'
  }
}));

const AddNewForm = ({handleChange, addFirstEmoji, addSecondEmoji, handleSubmit, handleScript, form}) => {
  const classes = useStyles()

  const [showFirstEmoji, setShowFirst] = useState(false)
  const [showSecondEmoji, setShowSecond] = useState(false)

  const toggleFirstPicker = () => {
    setShowFirst(!showFirstEmoji)
    setShowSecond(false)
  };

  const toggleSecondPicker = () => {
    setShowSecond(!showSecondEmoji)
    setShowFirst(false)
  };

  return (
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>   
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                id="input-with-icon-textfield"
                label="First Title"
                name="firstTitle"
                variant="outlined"
                onFocus={() => {
                  setShowFirst(false)
                  setShowSecond(false)
                }}
                value={form.firstTitle}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmojiEmotions onClick={toggleFirstPicker} style={{cursor: 'pointer'}}/>
                    </InputAdornment>
                  ),
                }}
              />
                {showFirstEmoji && <Picker set='apple' onSelect={addFirstEmoji}/>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                  id="input-with-icon-textfield"
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.input}
                  label="Second Title"
                  name="secondTitle"
                  variant="outlined"
                  onFocus={()=> {
                    setShowFirst(false)
                    setShowSecond(false)
                  }}
                  value={form.secondTitle}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmojiEmotions onClick={toggleSecondPicker} style={{cursor: 'pointer'}}/>
                      </InputAdornment>
                    ),
                  }}
                />
                {showSecondEmoji && <Picker set='apple' onSelect={addSecondEmoji}/>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="number"
                className={classes.input}
                name="timeInterval"
                label="Time Interval"
                variant="outlined"
                value={form.timeInterval}
                onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="number"
                className={classes.input}
                name="timeDelay"
                label="Time Delay"
                variant="outlined"
                value={form.timeDelay}
                onChange={handleChange}
                />
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="default"
                size="large"
                style={{float: "right", width: "100%", padding: "1rem"}}
              >
                Clear Form
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={handleScript}
                variant="contained"
                color="primary"
                size="large"
                style={{float: "right", width: "100%", padding: "1rem"}}
              >
                Generate Script
              </Button>
            </Grid>
          </Grid>
      </form>
  )
}

export default AddNewForm
