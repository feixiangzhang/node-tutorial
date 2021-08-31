const { response } = require('express')
const express = require('express')
const fs = require('fs')
const fetch = require('node-fetch')

// const app = express()
// app.use('/', (req, res, next) => {
//     console.log('0')
//     next()
// })

// app.get('/', (req, res) => {
//     res.end('hello')
// })

// app.get('/favicon.ico', (req, res) => {
//     console.log('request favicon.ico')
// })
// app.listen(3000, () => {
//     console.log('server is running on port 3000...')
// })

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then( response => response.json())
    .then( data => console.log(data))
    .catch( err => console.log(err))