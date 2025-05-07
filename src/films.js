// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter((movie) => movie.director === director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const arrayOfScores = movies
    .filter((movie) => movie.director === director)
    .map((movie) => movie.score);

  if (arrayOfScores.length === 0) return 0;

  const sum = arrayOfScores.reduce((acc, score) => acc + score, 0);

  let average = sum / arrayOfScores.length;
  console.log('EXERCICE 3->', average);
  return Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  return movies
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  return [...movies].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const moviesByCategory = movies.filter((movie) =>
    movie.genre.includes(genre)
  );

  if (moviesByCategory.length === 0) return 0;

  let scoresSum = moviesByCategory.reduce((acc, movie) => acc + movie.score, 0);

  return Number((scoresSum / moviesByCategory.length).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const durationsArray = movies.map((movie) => movie.duration);

  let newDurationArray = [];

  durationsArray.forEach((duration) => {
    let total = 0;
    const bothDurations = duration.split(' ');
    if (bothDurations[0].includes('h')) {
      total += parseInt(bothDurations[0]) * 60;
    } else if (bothDurations[0].includes('min')) {
      total += parseInt(bothDurations[0]);
    }

    if (bothDurations[1] && bothDurations[1].includes('min')) {
      total += parseInt(bothDurations[1]);
    }

    newDurationArray.push(total);
  });

  const updatedMovies = movies.map((movie, i) => {
    return {
      ...movie,
      duration: newDurationArray[i]
    };
  });
  return updatedMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const bestsFilms = movies
    .filter((movie) => movie.year === year)
    .sort((a, b) => b.score - a.score);

  if (bestsFilms.length === 0) return [];

  return [bestsFilms[0]];
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
    bestFilmOfYear
  };
}
