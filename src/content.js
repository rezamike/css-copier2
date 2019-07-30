/*global chrome*/
import React from 'react';
import ReactDOM from 'react-dom';
import './content.css';
import App from './App.js';

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
var app_core = {};


app.querySelector('#start').addEventListener('click', function() {
  var data = app_core.css_scrape();
  app_core.save_scrape(data);
});

app.querySelector('#end').addEventListener('click', function() {
  setTimeout(function() {
    app_core.from_storage();
  }, 1000);
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === 'clicked_browser_action') {
      app_core.toggle();
    }
  });

app_core.save_scrape = function(data) {
  var theValue = data;

  if (!theValue) {
    console.warn('Error: No value specified');
    return;
  }

  chrome.storage.local.set({key: theValue}, function() {
    console.log('First scrape settings saved', theValue);
  });
};

app_core.final_scrape = function(data) {
  var theValue = data;
  var version = 1;
  var site = window.location.host;
  var newKey = `${site} version: ${version}`;

  theValue['site'] = site;
  theValue['version'] = version;

  if (!theValue) {
    console.warn('Error: No value specified');
    return;
  }

  chrome.storage.local.set({[newKey]: theValue}, function() {
    console.log('Final comparison saved', theValue);
  });
};

app_core.from_storage = function() {
  chrome.storage.local.get(['key'], function(result) {
    app_core.compare_data(result.key);
  });
};

app_core.compare_data = function(data) {
  var newData = app_core.css_scrape();
  var updatedCSS = {};

  for (var selector in newData) {
    if (data.hasOwnProperty(selector)) {
      if (newData[selector] != data[selector]) {
        updatedCSS[selector] = newData[selector];
      }
    }
  }

  app_core.final_scrape(updatedCSS);
};

app_core.css_scrape = function() {
  var info = document.styleSheets;
  var moreInfo;
  var moreMoreInfo;
  var selectorText;
  var main;
  var thisOne = [];
  var thatOne = [];
  var mashUp = {};

  for (var i = 0; i < info.length; i++) {
    try {
      moreInfo = info[i].rules;

      for (var j = 0; j < moreInfo.length; j++) {
        moreMoreInfo = moreInfo[j].style;
        selectorText = moreInfo[j].selectorText;

        if (typeof moreMoreInfo === 'undefined') {
          break;
        } else {
          thatOne.push(moreMoreInfo.cssText);
        }

        if (typeof selectorText === 'undefined' || selectorText == null) {
          break;
        } else {
          thisOne.push(selectorText);
        }

        mashUp[thisOne[j]] = thatOne[j];
      }

      main = mashUp;
    } catch (e) {
      console.warn(`Catch during initial scrape: \n${e}`);
      continue;
    }
  }

  return main;
};

app_core.toggle = function() {
  if (app.style.display === 'none') {
    app.style.display = 'block';
  } else {
    app.style.display = 'none';
  }
};