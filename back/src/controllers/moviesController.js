const { getMoviesService, createMovieService } = require('../services/moviesService');
const catchAsync = require('../utils/catchAsync');

const getAllMovies = async (req, res) => {
    const movies = await getMoviesService();
    res.status(200).json(movies);
};

const createMovie = async (req, res) => {
    console.log(req.body);
    const movie = await createMovieService(req.body);
    res.status(201).json(movie);
};

module.exports = { getAllMovies: catchAsync(getAllMovies), createMovie: catchAsync(createMovie) };
