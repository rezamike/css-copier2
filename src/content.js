/*global chrome*/

import React from 'react';
import ReactDOM from 'react-dom';
import './content.css';
import App from './App.js';
import app_core from './app_core';

class Main extends React.Component {

  render() {
    return (
      <div className={'my-extension'}>
        <App />
      </div>
    )
  }
}

var app = document.createElement('div');
app.id = 'my-extension-root';
document.body.appendChild(app);
ReactDOM.render(<Main />, app);

app.style.display = 'none';


// 'button' press listener - chrome necessary
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === 'trigger_slider') {
      app_core.toggle(app);
    }
  });

// 'start' press listener - chrome necessary
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === 'start_scrape') {
      var data = app_core.css_scrape();
      app_core.save_scrape(data);
    }
  });

// 'stop' press listener - chrome necessary
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === 'save_diff') {
      setTimeout(function () {
        app_core.from_storage();
      }, 1000);
    }
  });