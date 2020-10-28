const startAddMovieButton = document.querySelector('header button');
const addMovieModal =document.getElementById('add-modal');

const toggleMovieModal = ()=>{
    addMovieModal.classList.toggle('visible');
};

startAddMovieButton.addEventListener('click',toggleMovieModal);