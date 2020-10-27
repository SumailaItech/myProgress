// let name ='Sumaila';

// if(name ==='Sumaila'){
//     let hobbies =['sports','basket']
//     console.log(hobbies)
// }
// function greet(){
//     // let age = 30;
//     // let name ='Manuel';
//     var age = 30;
//     var name ='Manuel';
//     console.log(name, age);
// }

// console.log(name,hobbies);
// greet();

// var userName ='sumaila';
// 'use strict'

//  userName ='sumaila';

// console.log(userName);

function getName(){
    return prompt('Your Name');
}

function greet(){
    const userName = getName();
    console.log("Hello " + userName);
}

greet();

