const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('singlePost');

function sendHttpRequest(method, url,data){
const promise = new Promise((resolve, reject)=>{

const xhr = new XMLHttpRequest();

xhr.open(method, url);

xhr.responseType ='json';

xhr.onload =function(){
    resolve(xhr.response);
//const listOfPost = JSON.parse(xhr.response);
}

xhr.send(JSON.stringify(data));

});

return promise;

}

async function fetchPost(){
    const responseData = await sendHttpRequest('GET','https://jsonplaceholder.typicode.com/posts');
    console.log(responseData);
    const listOfPost = responseData;
    console.log(listOfPost);
    for(const post of listOfPost){
        const postEl = document.importNode(postTemplate.content, true);
        //console.log(postEl);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;

        listElement.append(postEl);
    }

}

async function createPost(title, content){
    const userId =Math.random();
    const post ={
        title:title,
        body:content,
        userId:userId
    };

    sendHttpRequest('POST','https://jsonplaceholder.typicode.com/posts', post);

}

fetchPost();
createPost('Dummy','A dummy post');