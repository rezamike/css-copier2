/*global chrome*/
// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./content.css";
// import App from "./App.js";

// class Main extends React.Component {
//   constructor() {
//     super()

//     this.pullOurData = this.pullOurData.bind(this);
//   }

//   render() {

//     return (
//       <div className={'my-extension'}>
//         <App />
//       </div>
//     )
//   }
// }

// const app = document.createElement('div');
// app.id = "my-extension-root";
// document.body.appendChild(app);
// ReactDOM.render(<Main />, app);

// app.style.display = "none";
// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     if (request.message === "clicked_browser_action") {
//       // toggle();
//       // setTimeout(getValue, 3000);
//     }
//   }
// );

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "startScrape") {
      var data = JSON.stringify(pullOurData());
      saveChanges(data);
    }
  }
);

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "lastScrape") {
      getValue(compareData);
      // var storedData = getValue();
      // console.log("IS THIS WORKING?????", storedData);
      // compareData();
    }
  }
);

function saveChanges(data) {
  var theValue = data;
  if (!theValue) {
    console.log('Error: No value specified');
    return;
  }
  chrome.storage.local.set({key: theValue}, function() {
    console.log('Settings saved');
  });
};

function getValue(compareData) {
  chrome.storage.local.get(['key'], (result) => {
    compareData(JSON.parse(result.key));
    // return JSON.parse(result.key);
  });
};

function compareData(data) {
  var newData = pullOurData();
  var updatedCSS = {};
  console.log("THIS IS THE NEW NEW", newData);
  console.log("PLEASE WORK PLEASE", data);

  for (var selector in newData) {
    if (data.hasOwnProperty(selector)) {
      if (newData[selector] !== data[selector]) {
        updatedCSS[selector] = newData[selector];
      }
    }
  }

  console.log("THESE ARE THE UPDATED CSS ========", updatedCSS);
};

function pullOurData() {
  const info = document.styleSheets;
  var moreInfo;
  var moreMoreInfo;
  var selectorText;
  var selectorStyle;
  var main ={};
  var thisOne = [];
  var thatOne = [];
  var mashUp = {};

  for (var i = 0; i < info.length; i++) {

    try {
      if (info[i].href.indexOf(window.location.host) !== -1) {
        moreInfo = info[i].rules;

        // console.log("CHECKING THE CSSSSSSSSSS", moreInfo)
  
        for (var j = 0; j < moreInfo.length; j++) {
          selectorText = moreInfo[j].selectorText;
          selectorStyle = moreInfo[j].style;

          if (typeof selectorStyle !== "undefined") {
            // console.log("CHECK CHECK ....... ", selectorText, 'STYLE.....', selectorStyle["cssText"]);
            main[selectorText] = selectorStyle["cssText"];
          }
        }
      }
    } catch (e) {
      console.warn("Can't read the css rules of: " + info[i].href, e);
      continue;
    }

    // try {
    //   moreInfo = info[i].rules;

    //   for (var j = 0; j < moreInfo.length; j++) {
    //     moreMoreInfo = moreInfo[j].style;
    //     selectorText = moreInfo[j].selectorText;

    //     if (typeof moreMoreInfo === "undefined") {
    //       break;
    //     } else {
    //       thatOne.push(moreMoreInfo.cssText);
    //     }
    //     if (typeof selectorText === "undefined" || selectorText == null) {
    //       break;
    //     } else {
    //       thisOne.push(selectorText);
    //     }
    //     mashUp[thisOne[j]] = thatOne[j];
    //   }

    //   main = JSON.stringify(mashUp);
    // } catch (err) {
    //   console.log(`You gone and fucked up, cowpoke... Here's the problem with what you did: \n ${err}`);
    //   continue;
    // }
  }

  // saveChanges(mashUp);
  return main;
  
  // return main;
};

// function toggle() {
//   if (app.style.display === "none") {
//     app.style.display = "block";
//     // pullOurData();
//   } else {
//     app.style.display = "none";
//   }
// };