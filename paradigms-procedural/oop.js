class Validator{
    static REQUIRED ='REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';

    static validate(value, flag, validateValue){
        if(flag === this.REQUIRED){
            return value.trim().length > 0;
        }
        if(flag === this.MIN_LENGTH){
            return value.trim().length > validateValue;
        }
    }
}

class User{
    constructor(userName, uPassword){
        this.userName = userName;
        this.password = uPassword;
    }

    greet(){
        console.log('Hi, I am ' + this.userName);
    }
}

class UserInputForm{
    constructor(){
        this.form = document.getElementById('user-input');
        this.userName = document.getElementById('username');
        this.passwordInput = document.getElementById('password');

        this.form.addEventListener('submit', this.signupHandler.bind(this));
    }

    signupHandler(event){
        event.preventDefault();
        const enteredUsername =this.userName.value;
        const enteredpassword = this.passwordInput.value;

        if(!Validator.validate(enteredUsername, Validator.REQUIRED) || !Validator.validate(enteredUsername, Validator.MIN_LENGTH, 5)){
            alert('Invalid input - username and password is wrong (password shoud be atleast six or more');

            return;
        }

        const newUser = new User(enteredUsername, enteredpassword);
        console.log(newUser);
        newUser.greet();
    }
}

new UserInputForm();