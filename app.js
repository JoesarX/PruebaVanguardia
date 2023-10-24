const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/josue/', (req, res) => {
  res.send('Josue El Crack')
})

app.get('/vanguardia/', (req, res) => {
  res.send('Estamos en clase de Tecnologias de Vanguardia despues de agregar gitignore')
})

app.listen(3000)
