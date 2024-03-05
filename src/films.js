const movies = require('../src/data');

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
  console.log("EXERCICE 3 ->", mediaRedondeada);
  return mediaRedondeada ;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
