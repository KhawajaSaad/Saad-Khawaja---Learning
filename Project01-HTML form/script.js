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
    re.test(String(email).toLowerCase());
    if(re.test(email.value.toLowerCase().trim())){
        showSuccess(email);
    }else {
        showError(email,`Please enter a valid email`)

    }
}

// Function to check if field is empty.
function isEmpty(inputArray) {
        inputArray.forEach(function(input) {
            if (input.value === '') {
                showError(input,`${getFieldId(input)} is required`);
            }else{
                showSuccess(input);
            }
        });
}

//Function to get ID of the input field
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);

}

//Function to check length.
function checkLength(input,minL,maxL) {
    if( input.value.length < minL){
        showError(input,`${getFieldId(input)} should be atleast ${minL} characters`);

    }else if (input.value.length > maxL){
        showError(input,`${getFieldId(input)} should be less than ${maxL} characters`);
    }else {
        showSuccess(input);
    }

}

//Function to check confirm password
function confirmPassword(p1,p2){
    if(p1.value !== p2.value){
        showError(p2,"Passwords do not match");
        showError(p1,"");
    }
}

// This is an event listener for the form on submit.
form.addEventListener('submit',function(e) {
    e.preventDefault();
    isEmpty([username,email,password,password2]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    isValidEmail(email);
    confirmPassword(password,password2);
})