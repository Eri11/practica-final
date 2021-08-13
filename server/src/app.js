const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const use = require('./routes/pacientes.routes');


const app = express()

//environment variables
app.set('port', process.env.PORT || 4000);

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/pacientes", require('./routes/pacientes.routes'))
module.exports = app;