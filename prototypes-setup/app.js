class AgePerson{
    printAge(){
        console.log(this.age)
        }
}

class Person extends AgePerson{
    name ='Sumaila';

    constructor(){
        super();
        this.age =30;
    }

    greet(){
        console.log(
            'Hi, I am' + this.name + ' and I am '+ this.age + ' years old'
        )
    }
}

// function Person(){
//     this.age = 30;
//     this.name ="Sumaila";
//     this.greet = function(){
//         console.log(
//           'Hi, I am ' + this.name + ' and I am '+ this.age + ' years old'
//         )
//     }
// }

// const person = new Person();
// person.greet();
// console.dir(person);
// console.log(person);
// console.log(person.__proto__)

const p =new Person();
console.log(p);