const btnEnviar = document.getElementById('botonEnviar');
const btnBorrar = document.getElementById('botonBorrar');
const form = document.getElementById('cargarPelicular-form');

const URL = 'http://localhost:3000/movies';

const cargarPelicula = async () => {
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duration').value;
    const genreString = document.getElementById('genre').value.trim();
    const genre = genreString.split(',').map((genre) => genre.trim());
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;

    const data = {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
    };

    let errores = 7;

    const pTitulo = document.getElementById('feedback-titulo');
    const pAño = document.getElementById('feedback-año');
    const pDirector = document.getElementById('feedback-director');
    const pDuracion = document.getElementById('feedback-duracion');
    const pGenre = document.getElementById('feedback-genero');
    const pRate = document.getElementById('feedback-rate');
    const pPoster = document.getElementById('feedback-poster');

    !title ? (pTitulo.innerHTML = 'Debe ingresar el titulo') : ((pTitulo.innerHTML = ''), errores--);
    !year || year > 2024 || year < 1900 ? (pAño.innerHTML = 'Debe ingresar una fecha valida') : ((pAño.innerHTML = ''), errores--);
    !director ? (pDirector.innerHTML = 'Debe ingresar el director') : ((pDirector.innerHTML = ''), errores--);
    !duration ? (pDuracion.innerHTML = 'Debe ingresar la duracion') : ((pDuracion.innerHTML = ''), errores--);
    !genreString || genre.length == 0 ? (pGenre.innerHTML = 'Debe ingresar el/los genero/s') : ((pGenre.innerHTML = ''), errores--);
    !rate || rate <= 0 || rate > 10 ? (pRate.innerHTML = 'La calificacion debe ser un numero entre 0 y 10') : ((pRate.innerHTML = ''), errores--);
    !poster ? (pPoster.innerHTML = 'Debe ingresar el poster') : ((pPoster.innerHTML = ''), errores--);

    if (errores == 0) {
        fetch(URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log('data', data))
            .catch((error) => console.log(error));

        form.submit();
        alert('La pelicula fue cargada con exito!!');
    }

    console.log(errores);
};

const limpiarFormulario = () => {
    let title = document.getElementById('title');
    let year = document.getElementById('year');
    let director = document.getElementById('director');
    let duration = document.getElementById('duration');
    let genre = document.getElementById('genre');
    let rate = document.getElementById('rate');
    let poster = document.getElementById('poster');

    title.value = '';
    year.value = '';
    director.value = '';
    duration.value = '';
    genre.value = '';
    rate.value = '';
    poster.value = '';

    const pTitulo = document.getElementById('feedback-titulo');
    const pAño = document.getElementById('feedback-año');
    const pDirector = document.getElementById('feedback-director');
    const pDuracion = document.getElementById('feedback-duracion');
    const pGenre = document.getElementById('feedback-genero');
    const pRate = document.getElementById('feedback-rate');
    const pPoster = document.getElementById('feedback-poster');

    pTitulo.innerHTML = '';
    pAño.innerHTML = '';
    pDirector.innerHTML = '';
    pDuracion.innerHTML = '';
    pGenre.innerHTML = '';
    pRate.innerHTML = '';
    pPoster.innerHTML = '';
};

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    cargarPelicula();
});

btnBorrar.addEventListener('click', limpiarFormulario);
