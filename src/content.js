/*global chrome*/
import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";
import App from "./App.js";

class Main extends React.Component {

  render() {
    return (
      <div className={'my-extension'}>
        <App />
      </div>
    )
  }
}

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);

app.style.display = "none";


app.querySelector("#start").addEventListener("click", () => {
  saveChanges();

  setTimeout(getValue, 1000);
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      toggle();
    }
  }
);

function saveChanges() {
  try {
    var theValue = pullOurData();
    if (!theValue) {
      console.log('Error: No value specified');
      return;
    }
    chrome.storage.local.set({key: theValue}, function() {
      console.log('Settings saved');
    });
  } catch (e) {
    console.error(`In that moment he knew, he fucked up... \n${e}`);
  }
};

function getValue() {
  chrome.storage.local.get(['key'], (result) => {
    console.log(result.key);
  });
};

function pullOurData() {
  var info = document.styleSheets;
  var moreInfo;
  var moreMoreInfo;
  var selectorText;
  var main;
  var thisOne = [];
  var thatOne = [];
  var mashUp = {};
  var index = 0;
  var rules = 0;

  for (var i = 0; i < info.length; i++) {

    try {
      moreInfo = info[i].rules;
      index++;

      for (var j = 0; j < moreInfo.length; j++) {
        moreMoreInfo = moreInfo[j].style;
        selectorText = moreInfo[j].selectorText;

        if (typeof moreMoreInfo === "undefined") {
          break;
        } else {
          thatOne.push(moreMoreInfo.cssText);
          rules++;
        }
        if (typeof selectorText === "undefined" || selectorText == null) {
          break;
        } else {
          thisOne.push(selectorText);
        }
        mashUp[thisOne[j]] = thatOne[j];
      }

      main = mashUp;
    } catch (e) {
      console.error(`In that moment he knew, he fucked up... \n${e}`);
      continue;
    }
  }

  console.log(`StyleSheets: ${index}`);
  console.log(`Rules: ${rules}`);
  return main;
};

function toggle() {
  if (app.style.display === "none") {
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
};