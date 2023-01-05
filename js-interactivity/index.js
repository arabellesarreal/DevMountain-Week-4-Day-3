const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault();

    let inputField = document.querySelector('input');
    
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click',crossOffMovie);
    movie.appendChild(movieTitle);
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'

    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn)

    let list = document.querySelector('ul');
    list.appendChild(movie)

    inputField.value = ''

}

function deleteMovie(event){
    message.textContent = ('Movie deleted!')
    event.target.parentNode.remove()
}

function crossOffMovie(event){
    if(event.target.classList.contains('checked')){
        message.textContent = ('Movie watched!')
    }else{
        message.textContent = ('Movie added back!')
    }
    event.target.classList.toggle('checked')
}

let form = document.querySelector('form')
form.addEventListener('submit', addMovie);