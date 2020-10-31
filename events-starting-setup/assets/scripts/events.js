const button = document.querySelector('button');

// button.onclick =function(){

// }

const buttonHandler =(event)=>{
   // alert('Button was clicked');
   event.target.disabled = true;
    console.log(event);
}

// button.onclick =buttonHandler;

//button.addEventListener('mouseenter', buttonHandler);
// button.addEventListener('scroll', buttonHandler);

// setTimeout(()=>{
//     button.removeEventListener('click',buttonHandler);
// },2000)

// window.addEventListener('scroll',buttonHandler);

const form =document.querySelector('form');

form.addEventListener('submit',event=>{
    event.preventDefault();
    console.log(event);
});

const div =document.querySelector('div');
div.addEventListener('click',event=>{
    console.log(event);
    console.log("click for div");
},true);

button.addEventListener('click',(event)=>{
    //event.stopPropagation();
    console.log(event)
});

const listItems =document.querySelectorAll('li');
const list =document.querySelector('ul');

// listItems.forEach(listItem =>{
//     listItem.addEventListener('click',(event)=>{
//         event.target.classList.toggle('highlight');
//     });
// });

// list.addEventListener('click',event=>{
//     //console.log(event.currentTarget);
//    // event.target.classList.toggle('highlight');
//    event.target.closest('li').classList.toggle('highlight');
//    //form.submit();
//    button.click();
// })

list.addEventListener('click',event=>{
    //console.log(event.currentTarget);
   // event.target.classList.toggle('highlight');
   event.target.closest('li').classList.toggle('highlight');
   //form.submit();
   button.click();
   console.log(this);
})