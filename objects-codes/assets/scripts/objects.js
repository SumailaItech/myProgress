// const movieList = document.getElementById('movie-list');

// movieList.style.backgroundColor = 'red';
// movieList.style.display ='block';

// const person ={
//     'first name':'Sumaila',
//     age:30,
//     hobies:['Coding','eating','football'],
//     greet:function(){
//         alert("Hi there");
//     }
// }

// delete person.age;

// person.isAdmin =true;
// console.log(person['first name']);
const addMovieBtn =document.getElementById('add-movie-btn');
const searchBtn =document.getElementById('search-btn');

const movies =[];

const renderMovies =(filter='')=>{
    const movieList = document.getElementById('movie-list');
    if(movies.length ===0){
        movieList.classList.remove('visible');
        return;
    }else{
        movieList.classList.add('visible');
    }

    movieList.innerHTML ='';

    const filterMovies =!filter ? movies:movies.filter(movie=>movie.info.title.includes(filter));

    filterMovies.forEach((movie)=>{
        const movieEl =document.createElement('li');
        // if('info' in movie){

        // }
        const{ info, ...otherProps } = movie;
       // const { title:movieTitle } = info;
       //const { getFommattedTitle } = movie;
        let text = movie.getFommattedTitle() + ' - ';
      //let text = movie.info.title + ' - ';
        for(const key in info){
            if(key !=='title'){
                text = text + `${key}: ${info[key]}`
            }
        }
 console.log(otherProps);
        movieEl.textContent = text;
        movieList.appendChild(movieEl);
    });
}

const addMovieHandler =()=>{
    const title =document.getElementById('title').value;
    const extraName =document.getElementById('extra-name').value;
    const extraValue =document.getElementById('extra-value').value;
    if(title.trim()==='' || extraName.trim()==='' ||extraValue.trim() ===''){
        return;
    }

    const newMovie ={
        info:{
            title,
            [extraName]:extraValue
        },
        id:Math.random(),
        getFommattedTitle:function(){
            return this.info.title.toUpperCase();
        }
    }

    movies.push(newMovie);
    console.log(newMovie);
    renderMovies();
}

const searchMovieHandler = ()=>{
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}

addMovieBtn.addEventListener('click',addMovieHandler);
searchBtn.addEventListener('click',searchMovieHandler)