const Movie = require('../models/Movie');

module.exports = {
    getMoviesService: async () => {
        try {
            const movies = await Movie.find();

            return movies;
        } catch (error) {
            console.log(error);
        }
    },

    createMovieService: async (movie) => {
        try {
            const newMovie = await Movie.create(movie);
            return newMovie;
        } catch (error) {
            console.log(error);
        }
    },
};
