import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Form() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      
      <div>
        <TextField
          id="filled-basic"
          className={classes.textField}
          label="Name"
          margin="normal"
          variant="filled"
        />
      </div>

      <div>
        <TextField
          id="filled-basic"
          className={classes.textField}
          label="Email"
          margin="normal"
          variant="filled"
        />
      </div>

      <div>
        <TextField
          id="filled-basic"
          className={classes.textField}
          label="Password"
          margin="normal"
          variant="filled"
        />
      </div>
      
    </form>
  );
}

export default Form;