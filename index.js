/* Esercizio
Definire un array di oggetti; ogni oggetto rappresenta un film o serie tv, che è caratterizzato da: title, year, genre, rating, type (movie o tv), seasons (solo per serie tv).
Creare una classe Movie che contenga le informazioni sopra indicate.
Creare una classe TvSeries che estenda la classe Movie e ne aggiunta la proprietà seasons.
Entrambe le classi dovranno avere un metodo toString() che ritorni una stringa con i dati del film, tipo:
Jaws è un film di genere Drama. E’ stato rilasciato nel 1975 ed ha un voto di 8
Breaking Bad è una serie tv di genere Drama. La prima stagione è stata rilasciato nel 2008 ed in totale sono state prodotte 5 stagioni. Ha un voto di 9.5
Tramite la funzione .map(), creare un nuovo array dove per ogni elemento dell’array di oggetti viene creata un istanza della classe Movie o TvSerie in base al type e salvata nel nuovo array.
Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere. Prevedere un argomento per la lista dei film ed uno per il genere.

Creiamo una funzione che restituisca la lista di tutti i generi dei film, senza che questi si ripetano.
Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all’interno il risultato della funzione toString() di ogni film.

Eseguire tutto il codice da terminale tramite NodeJs e stampiamo nel terminale il risultato delle varie funzioni.
BONUS:
Rendere le proprietà delle classi private e creare dei setter e dei getter per potervi accedere.
Creare una classe Cart dove poter salvare i film che si intende noleggiare. Tramite delle funzioni, poter aggiungere o togliere dei film dal carrello. Creare poi una funzione che stampi il costo totale dei film da noleggiare, dove per ogni film occorre specificare un prezzo fisso di 3.99
INIZIO ESERCIZIO*/

const dotenv = require ("dotenv");
dotenv.config();
// forma contratta
// require("dotenv").config();

console.log(process.argv);

// array di oggetti
const movies = [
    {
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      rating: 8.8,
      type: "movie"
    },
    {
      title: "Breaking Bad",
      year: 2008,
      genre: "Drama",
      rating: 9.5,
      type: "tv",
      seasons: 5
    },
    {
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      rating: 9.0,
      type: "movie"
    },
    {
      title: "Stranger Things",
      year: 2016,
      genre: "Sci-Fi",
      rating: 8.7,
      type: "tv",
      seasons: 4
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      genre: "Drama",
      rating: 9.3,
      type: "movie"
    },
    {
      title: "Game of Thrones",
      year: 2011,
      genre: "Fantasy",
      rating: 9.3,
      type: "tv",
      seasons: 8
    }
  ];

// creazione classe movie
class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    // Creazione funzione tostring
    toString(){
        return `${this.title} è un film di genere ${this.genre}. E’ stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`
    };

}

// creazione di un movie
const movie1 = new Movie('titanic', 1990, 'Drama', 10, 'movie');
console.log(movie1.toString());

// estensione classe movie con TvSeries
class TvSeries extends Movie {
    // sovrascriviamo il constructor precedente
    constructor(title, year, genre, rating, type, seasons) {
        // utilizzando il constructor dalla classe genitore
        super(title, year, genre, rating, type);
        // e aggiungendo una nuova chiave
        this.seasons = seasons;
    }

    // Creazione funzione tostring
    toString(){
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`
    };
}

// creazione serie tv
const tv1 = new TvSeries('Naruto', 2000, 'Fantasy', 8, 'tv', 2);
console.log(tv1.toString());

// creazione nuovo array con map, utilizzando le istanze create tv e movie, sulla base dell'array di oggetti Movies
const newArray = movies.map(
    (item) => {
        if (item.type === "movie") {
            return new Movie(item.title, item.year, item.genre, item.rating, item.type)
        } else if (item.type === "tv") {
            return new TvSeries(item.title, item.year, item.genre, item.rating, item.type, item.seasons)
        }
    }
)
console.log(newArray);

// media voti per genere, funzione per il calcolo
function avarageRatingfunction(movies, genre) {
    // array creato dall'array completo di film e serie tv, filtrato verificando se gli items all'interno abbiano il genere passato come secondo argomento della funzione
    const chosenMoviesGenre = movies.filter(movie => movie.genre.includes(genre));

    // variabile che calcola la somma dell'array ottenuto, utilizzando la funzione reduce 
    const sumRating = chosenMoviesGenre.reduce((acc, movie) => acc + movie.rating, 0);

    // variabile che divide la somma per il numero di film con quel determinato genere
    const avarageRating = sumRating / chosenMoviesGenre.length;

    // risposta
    return avarageRating;

};
console.log(avarageRatingfunction(movies, "Drama"));

function genreArrayFunction(movies) {
    const genreArray = [];
    movies.forEach(movie => {
        if (!genreArray.includes(movie.genre)) {
            genreArray.push(movie.genre);
        }
    });
    return genreArray;
};


console.log(genreArrayFunction(movies));

