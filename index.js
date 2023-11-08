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



