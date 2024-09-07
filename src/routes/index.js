const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// ROTAS
router.get('../', IndexController.index)

// REGISTRO
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// LISTA
router.get('/list', CustomersController.listUsers)

module.exports = router