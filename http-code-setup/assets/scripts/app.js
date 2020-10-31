const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('singlePost');

const xhr = new XMLHttpRequest();

xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

xhr.responseType ='json';

xhr.onload =function(){
//const listOfPost = JSON.parse(xhr.response);
    const listOfPost = xhr.response;
    for(const post of listOfPost){
        const postEl = document.importNode(postTemplate.content, true);
        //console.log(postEl);
        postEl.querySelector('h2').textContent = post.title;
        postEl.querySelector('p').textContent = post.body;

        listElement.append(postEl);
    }
}

xhr.send();


