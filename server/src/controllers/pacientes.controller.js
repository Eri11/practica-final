const pacienteCtrl = {}

const Paciente = require('../models/Paciente.model')

pacienteCtrl.getPacientes = async(req, res) => {
    const pacientes = await Paciente.find()
    res.json(pacientes)
}
pacienteCtrl.createPaciente = async(req, res) => {
    const newPaciente = new Paciente(req.body)

    await newPaciente.save()

    res.send({ message: 'Paciente creado' })

}

pacienteCtrl.getPaciente = async(req, res) => {
    const paciente = await Paciente.findById(req.params.id)
    res.send(paciente);
}

pacienteCtrl.editPaciente = async(req, res) => {
    await Paciente.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: 'Paciente actualizado' })
}

pacienteCtrl.deletePaciente = async(req, res) => {
    await Paciente.findByIdAndDelete(req.params.id)
    res.json({ status: 'Paciente eliminado' })
}

module.exports = pacienteCtrl