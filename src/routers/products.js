const express = require ('express');
const router = express.Router();
const controller = require ('../controllers/productsController');

router.post('/crear', controller.crear);
router.get('/listar', controller.list);
router.get('/detalle/:id', controller.detalle);


module.exports = router;