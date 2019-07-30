/*global chrome*/

import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  card: {
    width: '75%',
    height: '25%',
    textAlign: 'center'
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
});

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
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h4" color="default">
              CSS Copier
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Not Done Yet.... BUT SOON, MY DUDE!
            </Typography>
            <Button variant='contained' color='primary' id='start' className={classes.button} onClick={start_scrape} >Start</Button>
            <Button variant='contained' color='secondary' id='end' className={classes.button} onClick={save_diff} >End</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
