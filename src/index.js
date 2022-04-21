const express = require('express')
const app = express()
const productsRouter = require('./routes/product')
require('./database')

app.use(express.json())
app.use(productsRouter)

app.listen(3000)
console.log('server on port', 3000)