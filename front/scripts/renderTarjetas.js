const contenedorPeliculas = document.getElementById("contenedor-tarjetas");

const renderTarjetas = (data) => {
    data.forEach((movie) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "card";

        const imagen = document.createElement("img");
        imagen.className = "card-img";
        imagen.src = movie.poster;

        const titulo = document.createElement("h3");
        titulo.className = "card-title";
        titulo.innerHTML = movie.title;

        const año = document.createElement("span");
        año.className = "card-text";
        año.innerHTML = movie.year;

        const genero = document.createElement("p");
        genero.className = "card-text";
        genero.innerHTML = movie.genre.join(", ");

        const tarjetaOverlay = document.createElement("div");
        tarjetaOverlay.className = "card-img-overlay";
        tarjetaOverlay.append(titulo, año, genero);

        const enlace = document.createElement("a");
        enlace.setAttribute("href", "#");
        enlace.append(imagen, tarjetaOverlay);

        tarjeta.append(enlace);

        contenedorPeliculas.append(tarjeta);
    });
};

module.exports = renderTarjetas;
