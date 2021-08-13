const { Schema, model } = require('mongoose')

const pacienteSchema = new Schema({
    mrn: { type: Number, requried: true },
    nombre: { type: String, requried: true },
    edad: { type: Number, required: true },
    direccion: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Paciente', pacienteSchema);