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