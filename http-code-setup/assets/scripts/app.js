const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('singlePost');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url,data){
// const promise = new Promise((resolve, reject)=>{

// const xhr = new XMLHttpRequest();
//xhr.setRequestHeader('Content-Type', 'application/json');

// xhr.open(method, url);

// xhr.responseType ='json';

// xhr.onload =function(){
//     if(xhr.status >= 200 && xhr.status < 300){
//         resolve(xhr.response);
//     }else{
//         reject(new Error('Something went wrong...'));
//     }
    
// //const listOfPost = JSON.parse(xhr.response);
// }

// xhr.onerror =function(){
//    reject(new Error('Failed to load send request'));
// }

// xhr.send(JSON.stringify(data));

// });

// return promise;
return fetch(url,{
    method:method,
    body: data
    // body:JSON.stringify(data),
    // headers:{
    //     'Content-Type':'application/json'
    // }
}).then(response =>{
    if(response.status >= 200 && response.status <300){
        return response.json();
    }else{
        response.json().then(errData =>{
            console.log(errData);
            throw new Error('Something went wrong at server side');
        });
        
    }
}).catch(error=>{
    console.log(error);
    throw new Error('Something went wrong');
})

}

async function fetchPost(){
    try{
        const responseData = await sendHttpRequest('GET','https://jsonplaceholder.typicode.com/posts');
   
        const listOfPost = responseData;
        for(const post of listOfPost){
            const postEl = document.importNode(postTemplate.content, true);
            //console.log(postEl);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    
    }catch(error){
        alert(error.message);
    }
}

async function createPost(title, content){
    const userId =Math.random();
    const post ={
        title:title,
        body:content,
        userId:userId
    };

    const fd = new FormData(form);
    // fd.append('title',title);
    // fd.append('body', content);
    fd.append('user',userId);

    sendHttpRequest('POST','https://jsonplaceholder.typicode.com/posts', fd);

};

fetchButton.addEventListener('click', fetchPost);

form.addEventListener('submit', event =>{
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;

    createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event=>{
 if(event.target.tagName ==='BUTTON'){
     const postId =event.target.closest('li').id;
     sendHttpRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`)
     }
});
