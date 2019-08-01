/*global chrome*/

import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import app_core from './app_core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';

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
    width: '75%',
    height: '50%'
  },
  buttons: {
    textAlign: 'center',
    height: '28%',
    paddingTop: '10%'
  },
  listSection: {
    backgroundColor: 'white',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
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
      <Grid container style={{ height: '60%', overflow: 'hidden', justifyContent: 'center' }}>
        <Grid item xs={10}>
          <Paper style={{margin: '5% 0', width: '100%', height: '25%', overflow: 'auto'}}>
            <List subheader={<li />}>
              {[0, 1, 2, 3, 4].map(sectionId => (
                <li key={`section-${sectionId}`} style={styles.listSection}>
                  <ul style={styles.ul}>
                    <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                    {[0, 1, 2].map(item => (
                      <ListItem key={`item-${sectionId}-${item}`}>
                        <ListItemText primary={`Item ${item}`} />
                      </ListItem>
                    ))}
                  </ul>
                </li>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
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
