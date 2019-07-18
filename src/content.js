/*global chrome*/
import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";

class Main extends React.Component {

  render() {
    return (
      <div className={'my-extension'}>
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
   function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
);
function pullOurData() {
  const info = document.styleSheets;
  var moreInfo;
  var moreMoreInfo;
  var selectorText;
  var thisOne = [];
  var thatOne = [];

  for (var i = 0; i < info.length; i++) {
    moreInfo = info[i].rules;

    for (var i = 0; i < moreInfo.length; i++) {
      moreMoreInfo = moreInfo[i].style;
      selectorText = moreInfo[i].selectorText.toString();

      if (typeof moreMoreInfo === "undefined") {
        break;
      } else {
        thatOne.push(moreMoreInfo.cssText)
        thisOne.push({ selectorText: thatOne });
        break;
      }
    }
  }

  console.log(thisOne);
  return thisOne;
};
function toggle(){
  if(app.style.display === "none"){
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }

  document.querySelector(".my-extension").innerHTML = pullOurData();
};
