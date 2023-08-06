const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const users = require('./routers/users');
const products = require('./routers/products');
const logs = require('./middelwares/logs');

//base de datos
mongoose.connect('mongodb://127.0.0.1:27017/nutrisalud')
    .then(() => console.log('db'))
    .catch(e => console.log(e));
// configuraciones
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// rutas
app.get('/', (req, res) => {
    next();
})
app.use(logs);
app.use('/products', products);
app.use('/users', users);

app.use(function (req, res, next) {
    return res.status(404).json({
        status: 404,
        error: 'Resource not found',
        message: 'Error en el recurso solicitado'
    })
});

app.listen(4000, () => console.log('server corriendo en el puerto http://localhost:4000/'));