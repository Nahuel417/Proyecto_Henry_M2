const axios = require("axios");
const URL = "http://localhost:3000/movies";
const renderTarjetas = require("./renderTarjetas");

const fetchData = async () => {
    try {
        const peliculas = await axios.get(URL);
        renderTarjetas(peliculas.data);
        console.log(peliculas.data);
    } catch (error) {
        console.log(error.message);
    }
};
fetchData();

const eventoMenu = require("./eventos");
