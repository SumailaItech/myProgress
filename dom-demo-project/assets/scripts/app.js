const startAddMovieButton = document.querySelector('header button');
const addMovieModal =document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieModal = addMovieModal.querySelector('.btn--passive')
const confirmAddMovieBtn = cancelAddMovieModal.nextElementSibling;
const userInputs =addMovieModal.querySelectorAll('input');

const movies = [];

const toggleBackDrop = ()=>{
    backdrop.classList.toggle('visible');
}

const clearMovieInput =()=>{
    for(const usrInput of userInputs){
        usrInput.value='';
    }
}

const toggleMovieModal = ()=>{
    addMovieModal.classList.toggle('visible');
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
        title:titleValue,
        image:imageUrlValue,
        rating:ratingValue
    }
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal()
    clearMovieInput();
}



const cancelAddMovie = () =>{
    toggleMovieModal();
    clearMovieInput();
}

const backdropClickHandler = ()=>{
    toggleMovieModal();
}



startAddMovieButton.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieModal.addEventListener('click', cancelAddMovie);
confirmAddMovieBtn.addEventListener('click',addMovieHandler);