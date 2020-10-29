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
"use strict"
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
       let { getFommattedTitle } = movie;
         let text = getFommattedTitle.call(movie) + ' - ';
        //let text = getFommattedTitle.apply(movie) + ' - ';
       // getFommattedTitle =getFommattedTitle.bind(movie);
      //let text = movie.info.title + ' - ';
        for(const key in info){
            if(key !=='title' && key!=='_title'){
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
    if(extraName.trim()==='' ||extraValue.trim() ===''){
        return;
    }

    const newMovie ={
        info:{
            set title(val){
                if(val.trim() ===""){
                    this._title ="DEFAULT";
                    return;
                }
                this._title = val;
            },
            get title(){
                return this._title;
            },
            [extraName]:extraValue
        },
        id:Math.random(),
        getFommattedTitle(){
            return this.info.title.toUpperCase();
        }
    }
    newMovie.info.title = title;
    console.log(newMovie.info.title);

    movies.push(newMovie);
    console.log(newMovie);
    renderMovies();
}

const searchMovieHandler = ()=>{
    console.log(this);
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}

addMovieBtn.addEventListener('click',addMovieHandler);
searchBtn.addEventListener('click',searchMovieHandler)