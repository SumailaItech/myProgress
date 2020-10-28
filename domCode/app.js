const h1 = document.getElementById('main-title');

h1.textContent ='some new title';
h1.style.color = 'white';
h1.style.backgroundColor ='black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (changed)'
//const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for(const listItemEl of listItemElements){
    console.dir(listItemEl);
}

const  ul = li.parentElement;
console.log(ul);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

const section = document.querySelector('section');
const button = document.querySelector('button');
//section.style.backgroundColor ='blue';

section.className ='red-bg';

button.addEventListener('click',()=>{
    // if(section.className ==='red-bg visible'){
    //     section.className ='red-bg invisible';
    // }else{
    //     section.className ='red-bg visible';
    // }
    section.classList.toggle('invisible');
})

