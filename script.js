'use strict'

// if (4 == 4) {
//     console.log ("ok");
// }


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:{},
    privat: false
};

const a = alert('Один из последних просмотренных фильмов?', ''),
      b = alert('На сколько оцените его?', ''),
      c = alert('Один из последних просмотренных фильмов?', ''),
      d = alert('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
alert
console.log(personalMovieDB);