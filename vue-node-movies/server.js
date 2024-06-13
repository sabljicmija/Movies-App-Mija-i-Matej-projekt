const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/random-movie', (req, res) => {
    const movies = [
        { title: 'The Shawshank Redemption', genre: 'Drama', director: 'Frank Darabont', year: 1994, rating: 9.3, link: 'https://www.imdb.com/title/tt0111161/' },
        { title: 'The Godfather', genre: 'Crime', director: 'Francis Ford Coppola', year: 1972, rating: 9.2, link: 'https://www.imdb.com/title/tt0068646/' },
        { title: 'The Dark Knight', genre: 'Action', director: 'Christopher Nolan', year: 2008, rating: 9.0, link: 'https://www.imdb.com/title/tt0468569/' },
        { title: 'Pulp Fiction', genre: 'Crime', director: 'Quentin Tarantino', year: 1994, rating: 8.9, link: 'https://www.imdb.com/title/tt0110912/' },
        { title: 'Forrest Gump', genre: 'Drama', director: 'Robert Zemeckis', year: 1994, rating: 8.8, link: 'https://www.imdb.com/title/tt0109830/' },
        { title: 'Inception', genre: 'Action', director: 'Christopher Nolan', year: 2010, rating: 8.8, link: 'https://www.imdb.com/title/tt1375666/' },
        { title: 'Fight Club', genre: 'Drama', director: 'David Fincher', year: 1999, rating: 8.8, link: 'https://www.imdb.com/title/tt0137523/' },
        { title: 'The Matrix', genre: 'Sci-Fi', director: 'Lana Wachowski, Lilly Wachowski', year: 1999, rating: 8.7, link: 'https://www.imdb.com/title/tt0133093/' },
        { title: 'Goodfellas', genre: 'Crime', director: 'Martin Scorsese', year: 1990, rating: 8.7, link: 'https://www.imdb.com/title/tt0099685/' },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy', director: 'Peter Jackson', year: 2001, rating: 8.8, link: 'https://www.imdb.com/title/tt0120737/' },
        { title: 'The Lord of the Rings: The Two Towers', genre: 'Fantasy', director: 'Peter Jackson', year: 2002, rating: 8.7, link: 'https://www.imdb.com/title/tt0167261/' },
        { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', director: 'Peter Jackson', year: 2003, rating: 8.9, link: 'https://www.imdb.com/title/tt0167260/' },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', genre: 'Sci-Fi', director: 'Irvin Kershner', year: 1980, rating: 8.7, link: 'https://www.imdb.com/title/tt0080684/' },
        { title: 'The Godfather: Part II', genre: 'Crime', director: 'Francis Ford Coppola', year: 1974, rating: 9.0, link: 'https://www.imdb.com/title/tt0071562/' },
        { title: 'The Silence of the Lambs', genre: 'Thriller', director: 'Jonathan Demme', year: 1991, rating: 8.6, link: 'https://www.imdb.com/title/tt0102926/' },
        { title: 'Saving Private Ryan', genre: 'Drama', director: 'Steven Spielberg', year: 1998, rating: 8.6, link: 'https://www.imdb.com/title/tt0120815/' },
        { title: 'Interstellar', genre: 'Adventure', director: 'Christopher Nolan', year: 2014, rating: 8.6, link: 'https://www.imdb.com/title/tt0816692/' },
        { title: 'Se7en', genre: 'Crime', director: 'David Fincher', year: 1995, rating: 8.6, link: 'https://www.imdb.com/title/tt0114369/' },
        { title: 'Gladiator', genre: 'Action', director: 'Ridley Scott', year: 2000, rating: 8.5, link: 'https://www.imdb.com/title/tt0172495/' },
        { title: 'The Green Mile', genre: 'Crime', director: 'Frank Darabont', year: 1999, rating: 8.6, link: 'https://www.imdb.com/title/tt0120689/' },
        { title: 'Braveheart', genre: 'Biography', director: 'Mel Gibson', year: 1995, rating: 8.3, link: 'https://www.imdb.com/title/tt0112573/' },
        { title: 'The Lion King', genre: 'Animation', director: 'Roger Allers, Rob Minkoff', year: 1994, rating: 8.5, link: 'https://www.imdb.com/title/tt0110357/' },
        { title: 'The Departed', genre: 'Crime', director: 'Martin Scorsese', year: 2006, rating: 8.5, link: 'https://www.imdb.com/title/tt0407887/' },
        { title: 'Back to the Future', genre: 'Adventure', director: 'Robert Zemeckis', year: 1985, rating: 8.5, link: 'https://www.imdb.com/title/tt0088763/' },
        { title: 'Whiplash', genre: 'Drama', director: 'Damien Chazelle', year: 2014, rating: 8.5, link: 'https://www.imdb.com/title/tt2582802/' },
        { title: 'Parasite', genre: 'Drama', director: 'Bong Joon Ho', year: 2019, rating: 8.6, link: 'https://www.imdb.com/title/tt6751668/' },
        { title: 'Avengers: Endgame', genre: 'Action', director: 'Anthony Russo, Joe Russo', year: 2019, rating: 8.4, link: 'https://www.imdb.com/title/tt4154796/' },
        { title: 'Joker', genre: 'Crime', director: 'Todd Phillips', year: 2019, rating: 8.4, link: 'https://www.imdb.com/title/tt7286456/' },
        { title: 'Inglourious Basterds', genre: 'Adventure', director: 'Quentin Tarantino', year: 2009, rating: 8.3, link: 'https://www.imdb.com/title/tt0361748/' },
        { title: 'The Wolf of Wall Street', genre: 'Biography', director: 'Martin Scorsese', year: 2013, rating: 8.2, link: 'https://www.imdb.com/title/tt0993846/' },
        { title: 'Django Unchained', genre: 'Drama', director: 'Quentin Tarantino', year: 2012, rating: 8.4, link: 'https://www.imdb.com/title/tt1853728/' },
        { title: '12 Angry Men', genre: 'Crime', director: 'Sidney Lumet', year: 1957, rating: 9.0, link: 'https://www.imdb.com/title/tt0050083/' },
        { title: 'The Pianist', genre: 'Biography', director: 'Roman Polanski', year: 2002, rating: 8.5, link: 'https://www.imdb.com/title/tt0253474/' },
        { title: 'The Usual Suspects', genre: 'Crime', director: 'Bryan Singer', year: 1995, rating: 8.5, link: 'https://www.imdb.com/title/tt0114814/' },
        { title: 'It\'s a Wonderful Life', genre: 'Drama', director: 'Frank Capra', year: 1946, rating: 8.6, link: 'https://www.imdb.com/title/tt0038650/' },
        { title: 'The Prestige', genre: 'Drama', director: 'Christopher Nolan', year: 2006, rating: 8.5, link: 'https://www.imdb.com/title/tt0482571/' },
        { title: 'The Intouchables', genre: 'Biography', director: 'Olivier Nakache, Éric Toledano', year: 2011, rating: 8.5, link: 'https://www.imdb.com/title/tt1675434/'},
        { title: 'The Shawshank Redemption', genre: 'Drama', director: 'Frank Darabont', year: 1994, rating: 9.3, link: 'https://www.imdb.com/title/tt0111161/' },
        { title: 'The Godfather', genre: 'Crime', director: 'Francis Ford Coppola', year: 1972, rating: 9.2, link: 'https://www.imdb.com/title/tt0068646/' },
        { title: 'The Dark Knight', genre: 'Action', director: 'Christopher Nolan', year: 2008, rating: 9.0, link: 'https://www.imdb.com/title/tt0468569/' },
        { title: 'Pulp Fiction', genre: 'Crime', director: 'Quentin Tarantino', year: 1994, rating: 8.9, link: 'https://www.imdb.com/title/tt0110912/' },
        { title: 'Forrest Gump', genre: 'Drama', director: 'Robert Zemeckis', year: 1994, rating: 8.8, link: 'https://www.imdb.com/title/tt0109830/' },
        { title: 'Fight Club', genre: 'Drama', director: 'David Fincher', year: 1999, rating: 8.8, link: 'https://www.imdb.com/title/tt0137523/' },
        { title: 'Inception', genre: 'Action', director: 'Christopher Nolan', year: 2010, rating: 8.8, link: 'https://www.imdb.com/title/tt1375666/' },
        { title: 'The Matrix', genre: 'Sci-Fi', director: 'Lana Wachowski, Lilly Wachowski', year: 1999, rating: 8.7, link: 'https://www.imdb.com/title/tt0133093/' },
        { title: 'Goodfellas', genre: 'Crime', director: 'Martin Scorsese', year: 1990, rating: 8.7, link: 'https://www.imdb.com/title/tt0099685/' },
        { title: 'The Lord of the Rings: The Return of the King', genre: 'Adventure', director: 'Peter Jackson', year: 2003, rating: 8.9, link: 'https://www.imdb.com/title/tt0167260/' },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', genre: 'Action', director: 'Irvin Kershner', year: 1980, rating: 8.7, link: 'https://www.imdb.com/title/tt0080684/' },
        { title: 'One Flew Over the Cuckoo\'s Nest', genre: 'Drama', director: 'Milos Forman', year: 1975, rating: 8.7, link: 'https://www.imdb.com/title/tt0073486/' },
        { title: 'Se7en', genre: 'Crime', director: 'David Fincher', year: 1995, rating: 8.6, link: 'https://www.imdb.com/title/tt0114369/' },
        { title: 'The Silence of the Lambs', genre: 'Crime', director: 'Jonathan Demme', year: 1991, rating: 8.6, link: 'https://www.imdb.com/title/tt0102926/' }
]
    const randomIndex = Math.floor(Math.random() * movies.length);
    res.json(movies[randomIndex]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
