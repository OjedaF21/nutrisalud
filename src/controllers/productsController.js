const Product = require('../database/models/Product');

let controller = {
    list: async (req, res) => {
        const products = Product.find({})
        res.status(200).json(products);
    },
    crear: async (req, res) => {
        try {
            let product = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                image: req.file.filename  
            }
            
            const productDatabase = await Product.create(product);
            res.status(201).json(productDatabase);
        } catch(error) {
            console.log(error);
            if (error.errors.name) {
               return res.status(400).json({message: 'Falta el campo name'})
            }
            res.status(500).json({message: 'Internal server error'});
        }
    },
    update: async (req, res) => {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(product);
    },
    detalle: async (req, res) => {
        const product = await Product.findById({_id: req.params.id});
        res.status(200).json(product);
    },
    delete: async (req, res) => {
        const product = await Product.deleteOne({_id: req.params.id});
        res.status(200).json(product);
    },
    buscador: async (req, res) => {
        const product = await Product.find({name: req.query.name});
        res.status(200).json(product);
    }
}
module.exports = controller;