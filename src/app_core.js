/*global chrome*/

var app_core = {};
app_core.results = [];

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

// token generator
app_core.token_gen = function () {
    var stringLength = 15;
    var stringArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '?'];
    var rndString = "";

    for (var i = 1; i < stringLength; i++) {
        var rndNum = Math.ceil(Math.random() * stringArray.length) - 1;
        rndString = rndString + stringArray[rndNum];
    };

    return rndString;
};

// to save and catalog final scrape on 'stop' press
app_core.final_scrape = function (data) {
    console.trace('app_core.final_scrape()');

    var theValue = data;
    var date = new Date();
    var site = window.location.host;
    var newKey = `${date} | ${site}`;
    var token = app_core.token_gen();
    var key = 1;

    theValue['site'] = site;
    theValue['date'] = date.toDateString();
    theValue['token'] = token;

    if (!theValue) {
        console.warn('Error: No value specified');
        return;
    }

    chrome.storage.local.remove(['key']);

    chrome.storage.local.get(function(result) {
        for (var i = 0; i < result.length; i++) {
            if (result[i] < key) {
                key++;
            }
        }
    });

    chrome.storage.local.set({
        [key]: theValue
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

// to show from local storage to list
// app_core.show_list = function () {
//     console.trace('app_core.show_list()');

//     chrome.storage.local.get(['key'], function (result) {
//         try {
//             console.log(result, "raw");
//             console.log(result.key, "key");

//             var resultArr = Object.keys(result).map(function (key) {
//                 return [Number(key), result[key]];
//             });

//             console.log(resultArr);
//         } catch (e) {
//             console.log(e);
//         }
//     });
// };

// to compare strings of data compare for data to storage
// app_core.string_compare = function(a, b) {
//     var i = 0;
//     var j = 0;
//     var result = "";

//     while (j < b.length) {
//         if (a[i] != b[j] || i == a.length) {
//             result += b[j];
//         } else {
//             i++;
//         }
//         j++;
//     }
//     return result;
// };

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

            for (var j = 0; j < cssRules.length; j++) {
                cssStyles = cssRules[j].style;
                elementTag = cssRules[j].selectorText;

                if (typeof cssStyles !== 'undefined' && (typeof elementTag !== 'undefined' || elementTag != null)) {

                    main[elementTag] = cssStyles['cssText'];
                }
            }

        } catch (e) {
            console.warn(`Catch during initial scrape: \n${e}`);
        }
    }
    console.log(main);
    return main;
};

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