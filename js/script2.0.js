let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};



function rememberMyFilms(params) {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотрелнных фильмов?'),
              b = prompt('На сколько оцените его');
    
        if (a!=null && b!=null && a!="" && b!='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        }
        else {
            console.log('error');
            i--;
        }
    }
    
}

// rememberMyFilms();



function detectPersonalLevel(param) {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
    console.log("Произошла ошибка");
    }
    
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if     (!hidden) {
                     console.log(personalMovieDB);
    }
}

console.log(personalMovieDB);


showMyDB(personalMovieDB.privat)