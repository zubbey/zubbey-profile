const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

const credential = require('./credential.json')

// --middle-ware--
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))
app.use('/static', express.static(path.join(__dirname, 'public')))

// --Routes--
app.get('/', function (req, res) {
    res.render('index', { title: 'Zubbey Profile', data: credential })
})
app.listen(PORT, () => console.log(`app start at PORT: ${PORT}`))