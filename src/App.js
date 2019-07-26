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
    height: '25%'
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

function App() {
// class App extends React.Component {
  const classes = useStyles();

  function initialScrape() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            "message": "startScrape"
        });
    });
  }

  function scrapeAndCompare() {
    chrome.tabs.query({
      active: true,
      currentWindow: true
  }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
          "message": "lastScrape"
      });
  });
  }

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
              POTENTIAL LIST
            </Typography>
            <Button onClick={initialScrape} size="large" variant="contained" color="primary" className={classes.button}>
              START
            </Button>
            <Button onClick={scrapeAndCompare} id="stopScrape" size="large" variant="contained" color="secondary" className={classes.button}>
              STOP
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
