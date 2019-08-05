/*global chrome*/

var app_core = {};

// to store initial scrape on 'start' press
app_core.save_scrape = function (data) {
    console.trace('app_core.save_scrape()');

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
    console.trace('app_core.final_scrape()');

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
    console.trace('app_core.from_storage()');

    chrome.storage.local.get(['key'], function (result) {
        app_core.compare_data(result.key);
    });
};

// to pull previous scrape and compare to end scrape per 'stop' press
app_core.compare_data = function (data) {
    console.trace('app_core.compare_data()');

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
    console.trace('app_core.css_scrape()');

    var info = document.styleSheets;
    var cssRules;
    var cssStyles;
    var elementTag;
    var main = {};


    for (var i = 0; i < info.length; i++) {
        try {
            cssRules = info[i].rules;

            console.log(cssRules, i)
            for (var j = 0; j < cssRules.length; j++) {
                cssStyles = cssRules[j].style;
                elementTag = cssRules[j].selectorText;

                if (typeof cssStyles !== 'undefined' && (typeof elementTag !== 'undefined' || elementTag != null)) {
                    console.log(cssStyles.cssText, elementTag, j)

                    main[elementTag] = cssStyles['cssText'];
                }
            }

            console.log(main);
        } catch (e) {
            console.warn(`Catch during initial scrape: \n${e}`);
        }
    }
    // return main;
};

// app_core.css_scrape = function () {
//     const info = document.styleSheets;
//     var moreInfo;
//     var moreMoreInfo;
//     var selectorText;

//     var selectorStyle;
//     var main = {};
//     var thisOne = [];
//     var thatOne = [];
//     var mashUp = {};

//     for (var i = 0; i < info.length; i++) {

//         try {
//             if (info[i].href.indexOf(window.location.host) !== -1) {
//                 moreInfo = info[i].rules;

//                 for (var j = 0; j < moreInfo.length; j++) {
//                     selectorText = moreInfo[j].selectorText;
//                     selectorStyle = moreInfo[j].style;

//                     if (typeof selectorStyle !== "undefined") {
//                         console.log("CHECK CHECK ....... ", selectorText, 'STYLE.....', selectorStyle["cssText"]);
//                         main[selectorText] = selectorStyle["cssText"];
//                     }
//                 }
//             }
//         } catch (e) {
//             console.warn("Can't read the css rules of: " + info[i].href, e);
//             continue;
//         }
//     }
//     console.log(main);
// };

// to toggle dom based injection for results screen
app_core.toggle = function (app_var) {
    console.trace('app_core.toggle()');

    if (app_var.style.display === 'none') {
        app_var.style.display = 'block';
    } else {
        app_var.style.display = 'none';
    }
};

// to call the message from 'button' press - chrome necessary
app_core.trigger_slider = function () {
    console.trace('app_core.trigger_slider()');

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
    console.trace('app_core.start_scrape()');

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
    console.trace('app_core.save_diff()');

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