/*  <!-- GIT 417: Chapter 1 Case Project
    Author: Gabe Nielsen
    Date: 7 October, 2021 */

// runs this simple code on button press. There are no variables, so x will always be greater than 5
function results1() {
    numberResults1 = document.getElementById('numberResults1');
    x = 10;
    if (x > 5) {
        numberResults1.innerHTML = 'x is greater than 5';
    }
}

/* this result reacts to the first number input. Since there is no result 
for x = 5, it will display that x is less than 5 when x = 5 */
function results2() {
    numberResults2 = document.getElementById('numberResults2');
    numberInput1 = document.getElementById('numberInput1');
    x = numberInput1.value;
    if (x > 5) {
        numberResults2.innerHTML = 'x is greater than 5';
    } else {
        numberResults2.innerHTML = 'x is less than 5';
    }
}

/* the full code for the simple example. Only works for the last number input. 
will display the correct statement for every number in the input */
function results3() {
    numberResults3 = document.getElementById('numberResults3');
    numberInput2 = document.getElementById('numberInput2');
    x = numberInput2.value;
    if (x > 5) {
        numberResults3.innerHTML = 'x is greater than 5';
    } else if (x == 5) {
        numberResults3.innerHTML = 'x is equal to 5';
    } else {
        numberResults3.innerHTML = 'x is less than 5';
    }
}

// creates the event listeners for the run button and the two number inputs
function createEventListeners() {
    var button = document.getElementById('tutorialButton');
    var numberInput1 = document.getElementById('numberInput1');
    var numberInput2 = document.getElementById('numberInput2');
    button.addEventListener('click', results1, false);
    numberInput1.addEventListener('change', results2, false);
    numberInput2.addEventListener('change', results3, false);
}

// creates event listeners on load
window.addEventListener('load', createEventListeners, false);
