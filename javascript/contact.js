/*  <!-- GIT 417: Chapter 1 Case Project
    Author: Gabe Nielsen
    Date: 1 October, 2021 */

// Global variables
var myForm;
var formValidity = true;

// checks that at least one of the two bottom text fields are filled out
function validateText() {
    var commentBox = document.getElementById('comment');
    var gameBox = document.getElementById('game');
    var noText = document.getElementById('noText');
    /* if both text fields have empty values, the first part of the if statement runs,
    which sets the form validity to false, and changes the background colors of the 
    text fields to yellow, and puts up a message explaining how to fix the problem. */
    if (commentBox.value === '' && gameBox.value === '') {
        commentBox.style.background = 'rgb(255,240,210)';
        gameBox.style.background = 'rgb(255,240,210)';
        noText.innerHTML =
            'Please fill out at least one of the two below text boxes.';
        noText.style.fontWeight = 'normal';
        formValidity = false;
    } else {
        commentBox.style.background = 'white';
        gameBox.style.background = 'white';
        noText.innerHTML = '';
        noText.style.display = 'none';
    }
}

/* validates that both the name and email fields are filled out. If either are blank,
the background color of the blank field turns red */
function validateInfo() {
    var email = document.getElementById('email');
    var name = document.getElementById('formName');
    if (name.value === '') {
        name.style.background = 'rgb(255,233,233)';
        formValidity = false;
    } else {
        name.style.background = 'white';
    }
    if (email.value === '') {
        email.style.background = 'rgb(255,233,233)';
        formValidity = false;
    } else {
        email.style.background = 'white';
    }
}

/* validates that a radio button is checked. If no button is checked, a red box appears
around the buttons */
function validateNewcomer() {
    var yesBox = document.getElementById('yes');
    var noBox = document.getElementById('no');
    var buttons = document.getElementsByClassName('button');
    if (!yesBox.checked && !noBox.checked) {
        for (i = 0; i < 2; i++) {
            buttons[i].style.outline = '2px solid red';
        }
        formValidity = false;
    } else {
        for (i = 0; i < 2; i++) {
            buttons[i].style.outline = '';
        }
    }
}

/* the script that validates the form. It runs every validation function, and if all pass,
then the form is submitted, and a thank you message appears. If any validation fails, the 
error message appears at the top of the form, with the appropriate areas highlighted. */
function validateForm(evt) {
    evt.preventDefault();
    formValidity = true;
    validateNewcomer();
    validateInfo();
    validateText();
    if (formValidity === true) {
        document.getElementById('errorText').innerHTML =
            'Thank you! We look forward to reading your comments.';
        document.getElementById('errorText').style.color = 'black';
        document.getElementById('errorText').style.display = 'block';
        document.getElementsByTagName('form')[0].submit();
    } else {
        document.getElementById('errorText').innerHTML =
            'Please fill out the highlighted areas and resubmit your order';
        document.getElementById('errorText').style.display = 'block';
        document.getElementById('errorText').style.color = 'red';
        scroll(0, 0);
    }
}

// listens for a form submission, and runs the validate form function on submission
function createEventListeners() {
    myForm = document.forms[0];
    myForm.addEventListener('submit', validateForm, false);
}

// creates event listeners on load
window.addEventListener('load', createEventListeners, false);
