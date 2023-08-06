const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const controller = require('../controllers/productsController');
const logs = require('../middelwares/logs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/image'))
    },
    filename: (req, file, cb) => {
        cb(null,`image-${Date.now()}${path.extname(file.originalname)}`);
    } 
});

const upload = multer({ storage: storage });

router.post('/crear', upload.single('image'), logs, controller.crear);
router.get('/listar', logs, controller.list);
router.get('/detalle/:id', logs, controller.detalle);


module.exports = router;