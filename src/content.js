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
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      toggle();
    }
  }
);
function pullOurData() {
  const info = document.styleSheets;
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

        if (typeof moreMoreInfo === "undefined") {
          break;
        } else {
          thatOne.push(moreMoreInfo.cssText);
        }
        if (typeof selectorText === "undefined" || selectorText == null) {
          break;
        } else {
          thisOne.push(selectorText);
        }
        mashUp[thisOne[j]] = thatOne[j];
      }

      main = JSON.stringify(mashUp);
    } catch (err) {
      console.log(`You gone and fucked up, cowpoke... Here's the problem with what you did: \n ${err}`);
      continue;
    }
  }

  console.log(mashUp);
  return main;
};
function toggle() {
  if (app.style.display === "none") {
    app.style.display = "block";
    pullOurData();
  } else {
    app.style.display = "none";
  }
};
