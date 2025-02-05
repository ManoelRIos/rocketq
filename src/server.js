const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))
server.use(express.static("public"))
server.use(route)

server.listen(3000, () => console.log("Rodando na porta 3000"))
