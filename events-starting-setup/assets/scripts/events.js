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
const div =document.querySelector('div');
div.addEventListener('click',event=>{
    console.log(event);
    console.log("click for div");
},true);

button.addEventListener('click',(event)=>{
    event.stopPropagation();
    console.log(event)
});