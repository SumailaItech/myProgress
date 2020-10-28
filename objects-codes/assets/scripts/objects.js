const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style.display ='block';

const person ={
    'first name':'Sumaila',
    age:30,
    hobies:['Coding','eating','football'],
    greet:function(){
        alert("Hi there");
    }
}

delete person.age;

person.isAdmin =true;
console.log(person['first name']);