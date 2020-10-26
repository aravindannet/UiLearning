const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const button = document.getElementById('button')

//Show Error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


//Show Success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


//Check Required
function checkRequired(inputArr) {
    // var inputArray = input;
    // console.log(inputArray.length);
    // for(i=0 ; i<=inputArray.length ; i++)
    // {
    //     console.log(inputArray[i].value);
    // }

    inputArr.forEach(function(input) {
        console.log(input.value);
        if (input.value.trim() === '') {
            //showError(input , input.id +' is required')
            // es6 template string
            showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`);
        } else {
            showSuccess(input);
        }
    });

}

//check input length
function checkLength(input, min, max) {
    if (input.value.length < min || input.value.length > max) {
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} sholud be in between ${max} , ${min}`);
    } else {
        showSuccess(input);
    }
}

//check password match

function checkpassword(input1, input2) {
    if (input1.value === input2.value) {
        showSuccess(input1);
    } else {
        showError(input2, 'Both the passwords should match');
    }
}



form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkpassword(password, password2);
});