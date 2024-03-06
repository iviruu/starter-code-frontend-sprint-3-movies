const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(peli=> (peli.director));
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter(peli=> peli.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let result = movies.filter(peli=> peli.director === director)
  let puntuacionTotal = result.reduce((total,peli) => total + peli.score,0);
  let puntuacionMedia = result.length > 0 ? puntuacionTotal / result.length : 0;
  let mediaRedondeada = parseFloat(puntuacionMedia.toFixed(2));
  return mediaRedondeada ;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let result = movies.map(pelis => (pelis.title))
  result.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  let resultado20 = result.slice(0,20);
  return resultado20;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let peliculas = [...movies];
  peliculas.sort((a,b) =>{
    if(a.year > b.year){
      return 1;
    }
    if(a.year < b.year){
      return -1;
    }
    return a.title.localeCompare(b.title);
  });
  return peliculas;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) { 
  let result = movies.filter(peli=> peli.genre .includes(genre));
  let puntuacionTotal = result.reduce((total,peli) => total + peli.score,0);
  let puntuacionMedia = result.length > 0 ? puntuacionTotal / result.length : 0;
  let mediaRedondeada = parseFloat(puntuacionMedia.toFixed(2));
  return mediaRedondeada ;

}

// Exercise 7: Modify the duration of movies to minutes
function convertirTiempoAMinutos(tiempo) {
  const regex = /(?:(\d+)h\s*)?(?:(\d+)\s*min)?/;
  const partes = tiempo.match(regex);
  if (!partes) {
    console.log("Formato no válido");
    return 0; 
  }
  const horas = parseInt(partes[1], 10) || 0;;
  const minutos = parseInt(partes[2], 10) || 0;;
  return horas * 60 + minutos;
}
function hoursToMinutes(movies) {
  const newMovies = movies.map(peli => ({
    ...peli,
    duration: convertirTiempoAMinutos(peli.duration)
    }));
    return newMovies

  
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies,year) {
  let peliculas = movies.filter(peli=> peli.year === year);
  peliculas.sort((a,b) => b.score - a.score);
  const highestScore = peliculas.length > 0 ? peliculas[0].score : null;
  const bestFilms = peliculas.filter(peli => peli.score === highestScore);

  return bestFilms;
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
