const CustomersModel = require ('../models/customers')

const defaultTitle = 'Cadastro de Clientes'

function index (req, res) {
    res.render('register', {
        title: defaultTitle
    })
}


function add(req, res){
    const {
        name,
        age
    } = req.body

    const register = new CustomersModel ({
        name, 
        age
    })

    register.save()

    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro Realizado com Sucesso!' 
    })
}

async function listUsers(req, res) {
    const users = await CustomersModel.find()

    res.render('listUsers', {
        users,
    })
}

module.exports = {
    index,
    add,
    listUsers,
}