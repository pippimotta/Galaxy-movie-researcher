
const APIKEY = config.apiKey

const APIURL = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&page=1`

const IMAGEURL = "https://image.tmdb.org/t/p/w500"

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=`


const main = document.getElementById('main')
const btn = document.getElementById('search-button')
const search = document.getElementById('search')
const headText = document.querySelector("header h2")

getData(APIURL)
async function getData(url) {

  const res = await fetch (url)
  const data = await res.json()
  const results = data.results;
  showMovies(results)
}


function showMovies(movies){
    main.innerHTML = ''
    movies.forEach((movie) => {
    const movieEl =  document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML =  `
    <a href="https://www.google.com/search?q=${movie.original_title}">
     <img src="${IMAGEURL+movie.poster_path}" alt="">
      <div class="movie-info">
      <h3>${movie.original_title}</h3>
      <span class=${changeColour(movie.vote_average)}>${movie.vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${movie.overview}
      </div>
    </a>
    `
    main.appendChild(movieEl)
    })

}


function changeColour(s){
  if (s >= 8) {
    return 'green'
  } else if (s < 8 && s >=6) {
    return 'orange'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value
     if(searchTerm && searchTerm !== '') {
        getData(SEARCH_API + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})




headText.addEventListener('click', () => {
  window.location.reload()
})

btn.addEventListener('click', (e) => {
  e.preventDefault()
  search.classList.toggle('active')
  btn.classList.toggle('active')
  search.focus()
})
