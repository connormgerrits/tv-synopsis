const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
    return response.render('index', { showdata })
})

app.get('/seasons/:number', (request, response) => {
    const { number } = request.params

    const season = showdata.seasons.find((season) => season.number === parseInt(number))

    return response.render('season', { season })
})

app.all('*', (request, response) => {
    response.sendStatus(404)
})

app.listen(1337, () => {
    console.log("Listening on port 1337...")
})