const router = require('express').Router();
const book = require('../controllers/book.controller');
const maintenance = require('../controllers/maintenance.controller')
const parser = require('body-parser')

router.get('/', maintenance.getAllMaintenance)
router.get('/:id', maintenance.getMaintenanceById)
router.post('/', maintenance.createMaintenance)
router.put('/:id', maintenance.updateMaintenance)
router.delete('/:id', maintenance.deleteMaintenance)

module.exports = router;