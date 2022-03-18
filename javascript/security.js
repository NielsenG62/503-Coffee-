/*  <!-- GIT 417: Chapter 1 Case Project
    Author: Gabe Nielsen
    Date: 24 September, 2021 */

// global variables
var navInfo = document.getElementById('navigator');
var screenInfo = document.getElementById('screen');

// writes in 3 navigator objects into its HTML location
function writeNav() {
    navInfo.innerHTML =
        'Web browser name: ' +
        navigator.appName +
        '<br>' +
        'Operating system: ' +
        navigator.platform +
        '<br>' +
        'User agent: ' +
        navigator.userAgent;
}

// writes in 3 screen objects into its HTML location
function writeScreen() {
    screenInfo.innerHTML =
        'Screen height: ' +
        screen.height +
        '<br>' +
        'Screen width: ' +
        screen.width +
        '<br>' +
        'Pixel depth: ' +
        screen.pixelDepth;
}

// runs functions on load
window.addEventListener('load', writeNav, false);
window.addEventListener('load', writeScreen, false);
