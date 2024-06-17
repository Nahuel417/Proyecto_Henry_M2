const app = require('./src/server');
const indexRouter = require('./src/routes/indexRouter');
const dbCon = require('./src/config/dbCon');

const PORT = 3000;

// ruta principal
app.use(indexRouter);

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ error: err.message });
});

dbCon().then((res) =>
    app.listen(PORT, () => {
        console.log(`servidor escuchando el puerto ${PORT}`);
    })
);
