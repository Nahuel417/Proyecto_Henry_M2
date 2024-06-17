function validateMovie(req, res, next) {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return next({ message: 'Debe completar todos los campos', statusCode: 400 });
    }

    if (year > 2024 || year < 1900) {
        return next({ message: 'Debe ingresar una fecha valida', statusCode: 400 });
    }

    if (rate < 0 || rate > 10) {
        return next({ message: 'La calificacion debe ser un numero entre 0 y 10', statusCode: 400 });
    }

    if (genre.length == 0 || genre.every((item) => item.trim().length === 0)) {
        return next({ message: 'El array de generos no puede estar vacio', statusCode: 400 });
    }

    next();
}

module.exports = validateMovie;
