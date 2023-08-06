const path = require('path');
const fs = require('fs');
const ruta = path.resolve(__dirname, '../data/products.json');
const jsonproducts = fs.readFileSync(ruta, { encoding: 'utf-8'});

let products = JSON.parse(jsonproducts);

let controller = {
    list: (req, res) => {
        res.json(products);
    },
    crear: (req, res) => {
        let product = {};
        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description;
        product.image = req.body.image;
        products.push(product);
        let productjson = JSON.stringify(products, null, 4);
        fs.writeFileSync(ruta, productjson);
        res.status(201).json(products);
    },
    detalle: (req, res) => {
        let elemento =
        products.find(elemento => req.params.id === elemento.id)
        res.json(products)
    }
}
module.exports = controller;