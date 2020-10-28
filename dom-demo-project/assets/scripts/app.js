const startAddMovieButton = document.querySelector('header button');
const addMovieModal =document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieModal = addMovieModal.querySelector('.btn--passive')
const confirmAddMovieBtn = cancelAddMovieModal.nextElementSibling;
const userInputs =addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI =()=>{
 if(movies.length === 0){
    entryTextSection.style.display ='block';
 }else{
    entryTextSection.style.display ='none';
 }
}
const deleteMovie = movieId =>{
    let movieIndex = 0;
    for(const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    //listRoot.removeChild(listRoot.children[movieIndex]);
}

const cancelMovieModal =()=>{
  deleteMovieModal.classList.remove('visible');
  toggleBackDrop();
}

const deleteMovieHandler = (movieId) =>{
    deleteMovieModal.classList.add('visible');
    toggleBackDrop()
   //deleteMovie(movieId);
}

const renderNewMovieUI = (id,title,imageUrl,rating)=>{
    const newMovieElement = document.createElement('li');
    newMovieElement.className ='movie-element';
    newMovieElement.innerHTML=`
        <div class="movie-element__image">
            <img src="${ imageUrl } " alt="${title}"> 
        </div>
        <div class="movie-element__info">
            <h2>${ title }</h2>
            <p>${ rating }/star</p>
        </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null,id));
    const listRoot = document.getElementById('movie-list');
    listRoot.appendChild(newMovieElement);
}

const toggleBackDrop = ()=>{
    backdrop.classList.toggle('visible');
}

const clearMovieInput =()=>{
    for(const usrInput of userInputs){
        usrInput.value='';
    }

    const closeMovieModal = ()=>{
        addMovieModal.classList.remove('visible');
    }
const showMovieModal = ()=>{
    addMovieModal.classList.add('visible');
    toggleBackDrop();
};

const addMovieHandler =()=>{
    const titleValue = userInputs[0].value;
    const imageUrlValue =userInputs[1].value;
    const ratingValue = userInputs[2].value

    if(titleValue.trim ==='' || imageUrlValue.trim ==='' ||
     ratingValue.trim ==='' || +ratingValue < 1 || +ratingValue > 5){
      alert("Enter valid value, rating between 1 and 5");
      return;
    }

    const newMovie ={
        id:Math.random().toString(),
        title:titleValue,
        image:imageUrlValue,
        rating:ratingValue
    }
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal()
    toggleBackDrop();
    clearMovieInput();
    renderNewMovieUI(newMovie.id,newMovie.title,newMovie.image,newMovie.rating);
    updateUI();
}



const cancelAddMovie = () =>{
    closeMovieModal();
    clearMovieInput();
}

const backdropClickHandler = ()=>{
    closeMovieModal();
    cancelAddMovieModal();
}



startAddMovieButton.addEventListener('click',showMovieModal);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieModal.addEventListener('click', cancelAddMovie);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);