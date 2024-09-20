let api = "https://www.omdbapi.com/?i=tt3896198&apikey=ac45c85d&t=" ;

let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let genre = document.querySelector('#gen');
let directors = document.querySelector('#direct');
let actors = document.querySelector('#actor');
let imdb = document.querySelector('#rating');
let awards = document.querySelector('#award');
let lang = document.querySelector('#ln');
let country = document.querySelector('#cont');
let collection = document.querySelector('#collection');
let time = document.querySelector('#tm');
let poster = document.querySelector('#poster')
let container = document.getElementById('container') ;
let error = document.querySelector('#error');
let suggestion = document.querySelector('.suggestion');
container.classList.add('hidden')

function search() {

    let movieInput = document.querySelector('#movieName') ;
    let query = api + movieInput.value ;

fetch(query).then((data)=>{
    return data.json().then((data)=>{

        if(data.Error == 'Movie not found!') {
            error.innerText = 'Movie not found!';
        }
       
        else{
            container.classList.remove('hidden') ;
            error.classList.add('hidden')
        title.innerText = data.Title ;
        desc.innerText = data.Plot ;
        imdb.innerText = data.imdbRating ;
        actors.innerText = data.Actors ;
        directors.innerText = data.Director ;
        time.innerText = data.Runtime ;
        awards.innerText = data.Awards ;
        genre.innerText = data.Genre ;
        lang.innerText = data.Language ;
        collection.innerText = data.BoxOffice ;
        country.innerText = data.Country;
        poster.src = data.Poster;

        if(data.imdbRating>=7){
            suggestion.innerText = 'Worth watching';
            suggestion.classList.add('success');
        }

        else if(data.imdbRating>=6 && data.imdbRating<7){
            suggestion.innerText = 'Can watch';
            suggestion.classList.add('okay');
        }

        else if(data.imdbRating<6){
            suggestion.innerText = 'Time waste';
            suggestion.classList.add('fail');
        }

        }
        
    })
})
}