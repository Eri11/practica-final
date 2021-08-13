const { Router } = require('express')
const router = Router()

const pacientesCtrl = require('../controllers/pacientes.controller')

router.get('/', pacientesCtrl.getPacientes);
router.post('/', pacientesCtrl.createPaciente);
router.get('/:id', pacientesCtrl.getPaciente);
router.put('/:id', pacientesCtrl.editPaciente);
router.delete('/:id', pacientesCtrl.deletePaciente);


module.exports = router