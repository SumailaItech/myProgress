// class AgePerson{
//     printAge(){
//         console.log(this.age)
//         }
// }

// class Person extends AgePerson{
//     name ='Sumaila';

//     constructor(){
//         super();
//         this.age =30;
//     }

//     greet(){
//         console.log(
//             'Hi, I am' + this.name + ' and I am '+ this.age + ' years old'
//         )
//     }
// }

// function Person(){
//     this.age = 30;
//     this.name ="Sumaila";
   
// }

// Person.prototype.greet = function(){
//     console.log(
//       'Hi, I am ' + this.name + ' and I am '+ this.age + ' years old'
//     )
// }
// // const person = new Person();
// // person.greet();
// // console.dir(person);
// // console.log(person);
// // console.log(person.__proto__)

// const p =new Person();
// console.log(p);

const course={
    title:'javascript-guide',
    rating:5
}
console.log(course);

console.log(Object.setPrototypeOf(course,{
    printRating:function(){
        console.log(`${this.rating}/5`)
    }
}));

course.printRating();

const student =Object.create({
    printProgress:function(){
        console.log(this.progress);
    }
});
student.name ='Sumaila';

Object.defineProperty(student, 'progress', {
    configurable:true,
    enumerable:true,
    value:0.7,
    writable:false
})

console.log(student);
//console.log(Object.getPrototypeOf(course));