const express = require('express');
const router = express.Router();
const tradesCtrl = require('../../controllers/trades');

router.get('/', tradesCtrl.index);
router.post('/', tradesCtrl.create);
router.delete('/:id', tradesCtrl.delete);
router.put('/:id', tradesCtrl.update);

module.exports = router;