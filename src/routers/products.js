const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');
const logs = require('../middelwares/logs');
const upload = require('../middelwares/storage');

router.post('/crear', upload.single('image'), logs, controller.crear);
router.get('/listar', logs, controller.list);
router.get('/detalle/:id', logs, controller.detalle);
router.put('/update/:id', logs, controller.update);
router.delete('/delete/:id', logs, controller.delete);

module.exports = router;