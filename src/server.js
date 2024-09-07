const express = require('express');
const path = require('path');

const db = require('./database')
const routes = require('./routes')

const app = express()


// CONECCAO COM O BANCO DE DADOS
db.connect()


// DEFININDO O TEMPLATE ENGINE
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// DEFININDO OS ARQUIVOS PUBLICOS
app.use(express.static(path.join(__dirname, 'public')))


// HABILITA SERVER PARA RECEBER DADOS VIA POST (FORMULARIO)
app.use(express.urlencoded({ extended: true }))


// DEFININDO AS ROTAS
app.use('/', routes)


// 404 error (NOT FOUND)
app.use((req, res) => { // middleware
    res.send('Página não encontrada!')
})


// EXECUTANDO O SERVIDOR
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is litening on port ${port}`))