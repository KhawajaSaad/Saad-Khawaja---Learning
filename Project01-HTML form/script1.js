// calling and saving code using ID in cost variables.
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// All Functions
// Function to show error.
function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'; //test += 'error' later.
    const small = formControl.querySelector('small');
    small.innerText = message;

}

// Function to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';


}
// Email validation function
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// This is an event listener for the form on submit.
form.addEventListener('submit',function(e) {
    e.preventDefault();
    if(username.value === '') {
        showError(username,'Username is required');
    }else {
        showSuccess(username);
    }
    // checking email.
    if(email.value === '') {
        showError(email,'email is required');
    }else if (!isValidEmail(email.value)) {
        showError(email,'Invalid email');

    }else {
        showSuccess(email);
    }
    // checking password.
    if(password.value === '') {
        showError(password,'Password is required');
    }else {
        showSuccess(password);
    }
    // checking password2.
    if(password2.value === '') {
        showError(password2,'Confirm password is required');
    }else {
        showSuccess(password2);
    }

})