const { Router } = require('express');
const router = Router();

//*  Rutas  //
// movies
const moviesRouter = require('./moviesRouter');
router.use('/movies', moviesRouter);

module.exports = router;
