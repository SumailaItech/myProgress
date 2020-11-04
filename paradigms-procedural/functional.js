const REQUIRED ='REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validateValue){
    if(flag === REQUIRED){
        return value.trim().length > 0;
    }
    if(flag === MIN_LENGTH){
        return value.trim().length > validateValue;
    }
}

function getUserInput(inputElement){
    return document.getElementById(inputElement).value;
}

function createuser(userName, userPassword){
    if(!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)){
        throw new Error('Invalid input - username and password is wrong (password shoud be atleast six or more');
    }

    return {
        userName : userName,
        password : userPassword
    };
}

function greet(user){
    console.log('Hi I am ' + user.userName);
}

function signupHandler(event){
    event.preventDefault();

    const enteredUsername = getUserInput('username');
    const enteredpassword = getUserInput('password');

    try{
        const newUser = createuser(enteredUsername, enteredpassword);
        console.log(newUser);
        greet(newUser);
    }catch(err){
alert(err.message);
//console.log(err.message)
    }
}


function connectForm(formId,formSubmitHandler){
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signupHandler);