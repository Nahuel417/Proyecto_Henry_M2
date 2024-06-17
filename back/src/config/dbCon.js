const mongoose = require('mongoose');
require('dotenv').config();

const URl = 'URL de la base de datos';

const dbCon = async () => {
    mongoose.connect(URl);
};

module.exports = dbCon;
