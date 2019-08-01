/*global chrome*/

var app_core = {};

// to store initial scrape on 'start' press
app_core.save_scrape = function (data) {
    var theValue = data;

    if (!theValue) {
        console.warn('Error: No value specified');
        return;
    }

    chrome.storage.local.set({
        key: theValue
    }, function () {
        console.log('First scrape settings saved', theValue);
    });
};

// to save and catalog final scrape on 'stop' press
app_core.final_scrape = function (data) {
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

    chrome.storage.local.set({
        [newKey]: theValue
    }, function () {
        console.log('Final comparison saved', theValue);
    });
};

// to pull from local storage based on key (catalog)
app_core.from_storage = function () {
    chrome.storage.local.get(['key'], function (result) {
        app_core.compare_data(result.key);
    });
};

// to pull previous scrape and compare to end scrape per 'stop' press
app_core.compare_data = function (data) {
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

// the main scraping functionality
app_core.css_scrape = function () {
    var info = document.styleSheets;
    var moreInfo;
    var moreMoreInfo;
    var selectorText;
    var main;
    var thisOne = [];
    var thatOne = [];
    var mashUp = {};

    try {
        for (var i = 0; i < info.length; i++) {

            moreInfo = info[i].rules;

            console.log(moreInfo, i)
            for (var j = 0; j < moreInfo.length; j++) {
                moreMoreInfo = moreInfo[j].style;
                selectorText = moreInfo[j].selectorText;

                if (typeof moreMoreInfo !== 'undefined' && (typeof selectorText !== 'undefined' || selectorText != null)) {
                    console.log(moreMoreInfo.cssText, selectorText, j)

                    thatOne.push(moreMoreInfo.cssText);
                    thisOne.push(selectorText);
                }

                mashUp[thisOne[j]] = thatOne[j];
            }

            main = mashUp;
        }
    } catch (e) {
        console.warn(`Catch during initial scrape: \n${e}`);
    }

    return main;
};

// to toggle dom based injection for results screen
app_core.toggle = function (app_var) {
    if (app_var.style.display === 'none') {
        app_var.style.display = 'block';
    } else {
        app_var.style.display = 'none';
    }
};

// to call the message from 'button' press - chrome necessary
app_core.trigger_slider = function () {
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

// to call the message from 'start' press - chrome necessary
app_core.start_scrape = function () {
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

// to call the message from 'stop' press - chrome necessary
app_core.save_diff = function () {
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

export default app_core;