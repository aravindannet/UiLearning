const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const button = document.getElementById('button')

//Show Error
function showError(input , message)
{
    const formControl = input.parentElement;
    formControl.className  = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message; 
}


//Show Success
function showSuccess(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


//Check Required
function checkRequired(inputArr)
{
    // var inputArray = input;
    // console.log(inputArray.length);
    // for(i=0 ; i<=inputArray.length ; i++)
    // {
    //     console.log(inputArray[i].value);
    // }

    inputArr.forEach(function(input)
    {
        console.log(input.value);
        if(input.value.trim() === '')
        {
            //showError(input , input.id +' is required')
            // es6 template string
            showError(input , `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`);
        }

        else{
             showSuccess(input);
        }
    });

}



form.addEventListener('submit' , function(e)
{
    e.preventDefault();
    checkRequired([username,email,password,password2]);
});