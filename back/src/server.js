const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

module.exports = app;
