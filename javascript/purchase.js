/*  <!-- GIT 417: Chapter 1 Case Project
    Author: Gabe Nielsen
    Date: 17 September, 2021 */

// global values
var totalDue = 0;
var stereo = document.getElementById('stereoHold');
var kenya = document.getElementById('kenyaHold');
var phono = document.getElementById('phonoHold');
var bagEntry = true;
var nameEntry = true;

// calculates the total cost of the coffee bags
function calcCost() {
    // defines cost of each bag
    stereoCost = stereo.value * 20;
    kenyaCost = kenya.value * 22;
    phonoCost = phono.value * 20;
    // calculates a total
    totalDue = stereoCost + kenyaCost + phonoCost;
    // writes the total due
    document.getElementById('cost').innerHTML = '$' + totalDue;
}

// sets all values to zero
function resetValues() {
    document.getElementById('stereoHold').value = 0;
    document.getElementById('kenyaHold').value = 0;
    document.getElementById('phonoHold').value = 0;
    document.getElementById('name').value = '';
}

function nameCheck() {
    var noSubmit = document.getElementById('noSubmit');
    var submit = document.getElementById('submit');
    var name = document.getElementById('name').value;
    var input = true;
    /*  This try/throw statement first checks if the text box is empty. If it is, 
    the catch changes the input variable to false, and the error message is placed
    in the noSubmit <p> element and displayed. Every instance of displaying a message
    also turns off the other type (the error messages are red). My finally makes
    the nameEntry match the value of the input variable, then runs the check to see
    if both values have an input */
    try {
        if (name === '') {
            throw 'Please leave your name in the text box.';
        }
    } catch (noName) {
        input = false;
        noSubmit.style.display = 'block';
        submit.style.display = 'none';
        noSubmit.innerHTML = noName;
        return false;
    } finally {
        nameEntry = input;
        checkValues();
    }
}

function bagCheck() {
    var noSubmit = document.getElementById('noSubmit');
    var submit = document.getElementById('submit');
    var input = true;
    /* This statement is similar in function to the nameCheck function, only the input
    being measured is the totalDue value. If it is 0, then no bags have been selected,
    which starts the catch. */
    try {
        if (totalDue === 0) {
            throw 'Please select at least one bag of coffee for us to hold.';
        }
    } catch (noBags) {
        input = false;
        noSubmit.style.display = 'block';
        submit.style.display = 'none';
        noSubmit.innerHTML = noBags;
        return false;
    } finally {
        bagEntry = input;
        checkValues();
    }
}

/* This function checks that there is at least one bag being ordered, and that there is a 
name in the text box. If these both return true, then the proper message will display. This
message displays in a different <p> element that is colored black, while the error <p> element
is then hidden. */
function checkValues() {
    var noSubmit = document.getElementById('noSubmit');
    var submit = document.getElementById('submit');
    if (bagEntry && nameEntry) {
        submit.innerHTML = 'Thank you! We will hold your order for 24 hours.';
        submit.style.display = 'block';
        noSubmit.style.display = 'none';
    }
}

// list of event listeners
// listens for change in number of bags
stereo.addEventListener('change', calcCost, false);
kenya.addEventListener('change', calcCost, false);
phono.addEventListener('change', calcCost, false);
// listens for button click, and runs the bagCheck and NameCheck functions on click
document
    .getElementById('submitButton')
    .addEventListener('click', nameCheck, false);
document
    .getElementById('submitButton')
    .addEventListener('click', bagCheck, false);

// resets form on reload
window.addEventListener('load', resetValues, false);

// IE8 compatibility
if (window.addEventListener) {
    window.addEventListener('load', resetValues, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', resetValues);
}
