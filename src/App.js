/*global chrome*/

import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import app_core from './app_core';

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: 1,
  },
  soonList: {
    height: '60%'
  },
  buttons: {
    textAlign: 'center',
    height: '20%'
  }
};


function App() {

  return (
    <div className="App">
      <div style={styles.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" color="default">
              CSS Copier
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Grid container spacing={12} style={styles.soonList} />
      <Grid container spacing={12} style={styles.buttons}>
        <Grid item xs={6}>
          <Button variant='contained' color='primary' id='start' style={styles.button} onClick={app_core.start_scrape}>Start</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant='contained' color='secondary' id='end' style={styles.button} onClick={app_core.save_diff}>End</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
