const {Router} = require('express')
const router = Router()

const Product = require('../models/Product')

router.get('/products', async(req, res) => {
    const limit = req.query.limit || 10
    const page = req.query.page || 1
    const products = await Product.paginate({}, {limit, page})
    res.json(products)
})

router.post('/products', async(req, res) => {
    const newProduct = new Product(req.body)
    const productSaved = await newProduct.save()
    res.send(productSaved)
})

module.exports = router