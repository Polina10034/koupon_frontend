import React, { Fragment } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../Theme/newTheme';

import { Dialog, DialogActions, DialogTitle, Grid } from '@material-ui/core';
import { StyledButton } from '../Theme/Button.styled';

const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: 200,
    maxWidth: 350,
    flexGrow: 1,
    margin: 'auto',
  },
  dialogtitle:{
    textAlign: 'center',
  },
  actions:{
    alignSelf: 'center',
  }
}));

export default function StatusDialog(props) {
  const classes = useStyles;
  const { open, status, onClose } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <Fragment>
        <Dialog
          className={classes.root}
          open={open}
          onClose={onClose}
          aria-labelledby="form-dialog-title"

        >
          <Grid item container justify="center">
            <img
              src="/images/done.png"
              alt="done"
              style={{ width: 160, height: 120, padding: 30 }}
            />
          </Grid>

          <DialogTitle style={{textAlign: 'center'}} id="form-dialog-title">{status}</DialogTitle>
          <DialogActions style={{alignSelf: 'center'}}>
            <StyledButton onClick={onClose} color="primary">
              Ok
            </StyledButton>
          </DialogActions>
        </Dialog>
      </Fragment>
    </MuiThemeProvider>
  );
}
