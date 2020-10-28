const person ={
    name:'Sumaila',
    age:30,
    hobies:['Coding','eating','football'],
    greet:function(){
        alert("Hi there");
    }
}

delete person.age;

person.isAdmin =true;
console.log(person);