const path = require('path');
const fs = require('fs');
const express = require ('express');
const multer = require ('multer');
const router = express.Router();
const controller = require ('../controllers/productsController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/image'))
    },
    filename: (req, file, cb) => {
        cb(null, 'image-${Date.now()}${path.etxname(file.originalname)}');
    } 
});

const upload = multer({ storage: storage });

router.post('/crear', upload.single('image'), controller.crear);
router.get('/listar', controller.list);
router.get('/detalle/:id', controller.detalle);


module.exports = router;