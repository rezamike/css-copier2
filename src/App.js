/*global chrome*/

import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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

function trigger_slider() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  },
    function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        "message": "trigger_slider"
      });
    });
};

function start_scrape() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  },
    function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        "message": "start_scrape"
      });
    });
};

function save_diff() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  },
    function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        "message": "save_diff"
      });
    });
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
      <Grid container spacing={6} style={styles.buttons}>
        <Button variant='contained' color='primary' id='start' style={styles.button} onClick={start_scrape}>Start</Button>
        <Button variant='contained' color='secondary' id='end' style={styles.button} onClick={save_diff}>End</Button>
      </Grid>
    </div>
  );
}

export default App;
